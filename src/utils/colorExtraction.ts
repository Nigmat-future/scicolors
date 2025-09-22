// Color extraction utilities using Canvas API and K-means clustering

export interface ExtractedColor {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  dominance: number; // percentage of pixels with this color
}

export interface ColorExtractionResult {
  colors: ExtractedColor[];
  originalImage: string; // base64 data URL
  imageInfo: {
    width: number;
    height: number;
    fileSize: number;
    fileName: string;
  };
}

// Convert RGB to HSL
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Convert RGB to HEX
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Calculate color distance for clustering
function colorDistance(color1: [number, number, number], color2: [number, number, number]): number {
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

// K-means clustering for color extraction
function kMeansColors(pixels: [number, number, number][], k: number): ExtractedColor[] {
  if (pixels.length === 0) return [];
  
  // Initialize centroids randomly
  const centroids: [number, number, number][] = [];
  for (let i = 0; i < k; i++) {
    const randomPixel = pixels[Math.floor(Math.random() * pixels.length)];
    centroids.push([...randomPixel]);
  }

  let clusters: [number, number, number][][] = Array(k).fill([]).map(() => []);
  let iterations = 0;
  const maxIterations = 20;

  while (iterations < maxIterations) {
    // Clear clusters
    clusters = Array(k).fill([]).map(() => []);

    // Assign pixels to nearest centroid
    pixels.forEach(pixel => {
      let minDistance = Infinity;
      let closestCentroid = 0;

      centroids.forEach((centroid, index) => {
        const distance = colorDistance(pixel, centroid);
        if (distance < minDistance) {
          minDistance = distance;
          closestCentroid = index;
        }
      });

      clusters[closestCentroid].push(pixel);
    });

    // Update centroids
    let converged = true;
    centroids.forEach((centroid, index) => {
      if (clusters[index].length > 0) {
        const newCentroid: [number, number, number] = [0, 0, 0];
        clusters[index].forEach(pixel => {
          newCentroid[0] += pixel[0];
          newCentroid[1] += pixel[1];
          newCentroid[2] += pixel[2];
        });
        newCentroid[0] = Math.round(newCentroid[0] / clusters[index].length);
        newCentroid[1] = Math.round(newCentroid[1] / clusters[index].length);
        newCentroid[2] = Math.round(newCentroid[2] / clusters[index].length);

        if (colorDistance(centroid, newCentroid) > 1) {
          converged = false;
        }
        centroids[index] = newCentroid;
      }
    });

    if (converged) break;
    iterations++;
  }

  // Convert to ExtractedColor format
  return centroids
    .map((centroid, index) => {
      const [r, g, b] = centroid;
      const dominance = (clusters[index].length / pixels.length) * 100;
      
      return {
        hex: rgbToHex(r, g, b),
        rgb: { r, g, b },
        hsl: rgbToHsl(r, g, b),
        dominance: Math.round(dominance * 100) / 100
      };
    })
    .filter(color => color.dominance > 1) // Filter out colors with less than 1% dominance
    .sort((a, b) => b.dominance - a.dominance); // Sort by dominance
}

// Main color extraction function
export async function extractColorsFromImage(
  file: File,
  numColors: number = 6
): Promise<ColorExtractionResult> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      try {
        // Resize image for faster processing (max 400px)
        const maxSize = 400;
        const ratio = Math.min(maxSize / img.width, maxSize / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        if (!ctx) {
          reject(new Error('Canvas context not available'));
          return;
        }

        // Draw and resize image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels: [number, number, number][] = [];

        // Sample pixels (every 4th pixel for performance)
        for (let i = 0; i < imageData.data.length; i += 16) {
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const b = imageData.data[i + 2];
          const a = imageData.data[i + 3];

          // Skip transparent pixels and very dark/light pixels
          if (a > 128 && (r + g + b) > 30 && (r + g + b) < 735) {
            pixels.push([r, g, b]);
          }
        }

        if (pixels.length === 0) {
          reject(new Error('No valid pixels found in image'));
          return;
        }

        // Extract colors using K-means
        const extractedColors = kMeansColors(pixels, Math.min(numColors, 8));

        // Create base64 image URL for preview
        const originalImageUrl = canvas.toDataURL('image/jpeg', 0.8);

        resolve({
          colors: extractedColors,
          originalImage: originalImageUrl,
          imageInfo: {
            width: img.naturalWidth,
            height: img.naturalHeight,
            fileSize: file.size,
            fileName: file.name
          }
        });
      } catch (error) {
        reject(new Error(`Failed to process image: ${error}`));
      }
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    // Convert file to data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
}

// Validate if file is a valid image
export function isValidImageFile(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
  return validTypes.includes(file.type);
}

// Format file size for display
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}