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
        title: "颜色提取成功",
        description: `从图片中提取了 ${result.colors.length} 种主要颜色`,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '颜色提取失败';
      setError(errorMessage);
      
      toast({
        title: "提取失败",
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
              AI 图片配色提取
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
              智能颜色分析
            </Badge>
            <Badge variant="outline" className="bg-card/50 border-border/50">
              K-means 聚类算法
            </Badge>
            <Badge variant="outline" className="bg-card/50 border-border/50">
              即时预览
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
                    提取颜色数量: {numColors[0]} 种
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
                    <span>3 种 (简约)</span>
                    <span>8 种 (丰富)</span>
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
                  使用技巧
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 选择色彩丰富、对比度好的图片效果更佳</li>
                  <li>• 系统会自动过滤背景色和相似颜色</li>
                  <li>• 提取结果按颜色在图片中的占比排序</li>
                  <li>• 支持一键复制颜色代码和导出调色板</li>
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
                  <h4 className="font-semibold text-destructive mb-1">颜色提取失败</h4>
                  <p className="text-sm text-destructive/80">{error}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="mt-3 bg-card/50 hover:bg-card border-border/50"
                  >
                    重新尝试
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Extraction result */}
          {extractionResult && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">提取结果</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="bg-card/50 hover:bg-card border-border/50"
                >
                  重新上传
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