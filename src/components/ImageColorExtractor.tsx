import React, { useState } from 'react';
import { X, Palette, Sparkles, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { ImageUploadZone } from '@/components/ImageUploadZone';
import { ExtractedPalette } from '@/components/ExtractedPalette';
import { extractColorsFromImage, ColorExtractionResult } from '@/utils/colorExtraction';
import { useToast } from '@/hooks/use-toast';

interface ImageColorExtractorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageColorExtractor: React.FC<ImageColorExtractorProps> = ({
  isOpen,
  onClose
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractionResult, setExtractionResult] = useState<ColorExtractionResult | null>(null);
  const [numColors, setNumColors] = useState([6]);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileSelect = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    setExtractionResult(null);

    try {
      const result = await extractColorsFromImage(file, numColors[0]);
      setExtractionResult(result);
      
      toast({
        title: "Color extraction successful",
        description: `Extracted ${result.colors.length} main colors from the image`,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Color extraction failed';
      setError(errorMessage);
      
      toast({
        title: "Extraction failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setExtractionResult(null);
    setError(null);
    setNumColors([6]);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card border-border/50">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-xl">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              AI Image Color Extraction
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-8 w-8 p-0 hover:bg-muted/50"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Badge variant="outline" className="bg-card/50 border-border/50">
              <Palette className="w-3 h-3 mr-1" />
              Smart Color Analysis
            </Badge>
            <Badge variant="outline" className="bg-card/50 border-border/50">
              K-means Clustering
            </Badge>
            <Badge variant="outline" className="bg-card/50 border-border/50">
              Instant Preview
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {!extractionResult && !error && (
            <>
              {/* Color count slider - only show when not processing */}
              {!isProcessing && (
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    Number of colors to extract: {numColors[0]}
                  </label>
                  <Slider
                    value={numColors}
                    onValueChange={setNumColors}
                    max={8}
                    min={3}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>3 (Minimal)</span>
                    <span>8 (Rich)</span>
                  </div>
                </div>
              )}

              {/* Upload zone */}
              <ImageUploadZone
                onFileSelect={handleFileSelect}
                isProcessing={isProcessing}
              />

              {/* Tips */}
              <div className="bg-card/30 border border-border/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Usage Tips
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Choose images with rich colors and good contrast for better results</li>
                  <li>• System automatically filters background colors and similar colors</li>
                  <li>• Extraction results are sorted by color dominance in the image</li>
                  <li>• Supports one-click copy of color codes and palette export</li>
                </ul>
              </div>
            </>
          )}

          {/* Error display */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-destructive mb-1">Color extraction failed</h4>
                  <p className="text-sm text-destructive/80">{error}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="mt-3 bg-card/50 hover:bg-card border-border/50"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Extraction result */}
          {extractionResult && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Extraction Results</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="bg-card/50 hover:bg-card border-border/50"
                >
                  Upload New Image
                </Button>
              </div>
              <ExtractedPalette result={extractionResult} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};