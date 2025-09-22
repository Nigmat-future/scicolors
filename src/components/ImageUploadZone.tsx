import React, { useCallback, useState } from 'react';
import { Upload, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { isValidImageFile, formatFileSize } from '@/utils/colorExtraction';

interface ImageUploadZoneProps {
  onFileSelect: (file: File) => void;
  isProcessing?: boolean;
  className?: string;
}

export const ImageUploadZone: React.FC<ImageUploadZoneProps> = ({
  onFileSelect,
  isProcessing = false,
  className
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragActive(true);
    }
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    setError(null);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  }, []);

  const handleFileSelection = (file: File) => {
    // Validate file type
    if (!isValidImageFile(file)) {
      setError('Please upload a valid image file (JPG, PNG, WEBP, GIF)');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('Image file size cannot exceed 10MB');
      return;
    }

    setError(null);
    onFileSelect(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-xl p-8 transition-all duration-300",
          "flex flex-col items-center justify-center min-h-[200px] cursor-pointer",
          "bg-card/30 backdrop-blur-sm",
          isDragActive
            ? "border-primary bg-primary/5 scale-[1.02]"
            : "border-border/50 hover:border-primary/50 hover:bg-card/50",
          isProcessing && "pointer-events-none opacity-50"
        )}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        {/* Background glow effect */}
        <div className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
          isDragActive && "opacity-100 bg-gradient-primary/10"
        )} />

        {/* Upload icon */}
        <div className={cn(
          "relative z-10 p-4 rounded-full mb-4 transition-all duration-300",
          "bg-primary/10 border border-primary/20",
          isDragActive && "scale-110 bg-primary/20"
        )}>
          {isProcessing ? (
            <ImageIcon className="w-8 h-8 text-primary animate-pulse" />
          ) : (
            <Upload className={cn(
              "w-8 h-8 transition-colors duration-300",
              isDragActive ? "text-primary" : "text-muted-foreground"
            )} />
          )}
        </div>

        {/* Upload text */}
        <div className="relative z-10 text-center space-y-2">
          <h3 className={cn(
            "text-lg font-semibold transition-colors duration-300",
            isDragActive ? "text-primary" : "text-foreground"
          )}>
            {isProcessing ? 'Extracting colors...' : 'Upload Image to Extract Colors'}
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            {isDragActive
              ? 'Release to upload image'
              : 'Drag image here or click to select file'
            }
          </p>
          <p className="text-xs text-muted-foreground">
            Supports JPG, PNG, WEBP, GIF formats, max 10MB
          </p>
        </div>

        {/* Select file button */}
        {!isProcessing && (
          <Button
            variant="outline"
            size="sm"
            className="relative z-10 mt-4 bg-card/50 hover:bg-card border-border/50"
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById('file-input')?.click();
            }}
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Select Image
          </Button>
        )}

        {/* Hidden file input */}
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
          disabled={isProcessing}
        />

        {/* Processing overlay */}
        {isProcessing && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm text-muted-foreground">Analyzing image...</p>
            </div>
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}
    </div>
  );
};