import React, { useState } from 'react';
import { Copy, Check, Download, Eye, Palette, BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChartPreview } from '@/components/ChartPreview';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { ColorExtractionResult, formatFileSize } from '@/utils/colorExtraction';

interface ExtractedPaletteProps {
  result: ColorExtractionResult;
  onClose?: () => void;
}

export const ExtractedPalette: React.FC<ExtractedPaletteProps> = ({
  result,
  onClose
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, index?: number, type: string = 'HEX') => {
    try {
      await navigator.clipboard.writeText(text);
      if (index !== undefined) {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      }
      toast({
        title: "复制成功",
        description: `${type} 颜色代码已复制到剪贴板`,
      });
    } catch (error) {
      toast({
        title: "复制失败",
        description: "无法复制到剪贴板，请手动复制",
        variant: "destructive",
      });
    }
  };

  const copyAllColors = () => {
    const hexColors = result.colors.map(color => color.hex).join(', ');
    copyToClipboard(hexColors, undefined, '完整调色板');
  };

  const downloadPalette = () => {
    const paletteData = {
      name: `提取自 ${result.imageInfo.fileName}`,
      colors: result.colors,
      extractedAt: new Date().toISOString(),
      source: result.imageInfo
    };
    
    const blob = new Blob([JSON.stringify(paletteData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `extracted-palette-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "下载完成",
      description: "调色板已导出为 JSON 文件",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header with image info */}
      <Card className="palette-card">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <img
                src={result.originalImage}
                alt="原图"
                className="w-20 h-20 object-cover rounded-lg border border-border/50"
              />
              <div className="absolute -bottom-1 -right-1 bg-primary/20 backdrop-blur-sm rounded-full p-1">
                <Palette className="w-3 h-3 text-primary" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg truncate">{result.imageInfo.fileName}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="text-xs">
                  {result.imageInfo.width} × {result.imageInfo.height}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {formatFileSize(result.imageInfo.fileSize)}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {result.colors.length} 种颜色
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Extracted colors */}
      <Card className="palette-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              提取的配色方案
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
                className="bg-card/50 hover:bg-card"
              >
                <Eye className="w-4 h-4 mr-1" />
                {showPreview ? '隐藏' : '预览'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={copyAllColors}
                className="bg-card/50 hover:bg-card"
              >
                <Copy className="w-4 h-4 mr-1" />
                复制全部
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadPalette}
                className="bg-card/50 hover:bg-card"
              >
                <Download className="w-4 h-4 mr-1" />
                导出
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Color swatches */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {result.colors.map((color, index) => (
              <div key={index} className="group">
                <div
                  className="relative aspect-square rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyToClipboard(color.hex, index)}
                >
                  {/* Copy indicator */}
                  <div className={cn(
                    "absolute inset-0 rounded-lg flex items-center justify-center transition-all duration-200",
                    "bg-black/50 opacity-0 group-hover:opacity-100"
                  )}>
                    {copiedIndex === index ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-white" />
                    )}
                  </div>
                  
                  {/* Dominance indicator */}
                  <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1 rounded">
                    {color.dominance.toFixed(1)}%
                  </div>
                </div>
                
                {/* Color info */}
                <div className="mt-2 space-y-1">
                  <div className="text-xs font-mono text-center text-foreground">
                    {color.hex.toUpperCase()}
                  </div>
                  <div className="text-xs text-center text-muted-foreground">
                    HSL({color.hsl.h}, {color.hsl.s}%, {color.hsl.l}%)
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart preview */}
          {showPreview && (
            <>
              <Separator />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-sm font-medium">图表预览</span>
                </div>
                <ChartPreview colors={result.colors.map(c => c.hex)} />
              </div>
            </>
          )}

          {/* Detailed color information */}
          <Separator />
          <div className="space-y-3">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <Copy className="w-4 h-4" />
              颜色代码详情
            </h4>
            <div className="grid gap-2">
              {result.colors.map((color, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                  <div
                    className="w-8 h-8 rounded border border-border/50 flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="space-y-1">
                      <span className="text-muted-foreground">HEX:</span>
                      <code className="block font-mono text-foreground">{color.hex.toUpperCase()}</code>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground">RGB:</span>
                      <code className="block font-mono text-foreground">
                        {color.rgb.r}, {color.rgb.g}, {color.rgb.b}
                      </code>
                    </div>
                    <div className="space-y-1">
                      <span className="text-muted-foreground">HSL:</span>
                      <code className="block font-mono text-foreground">
                        {color.hsl.h}°, {color.hsl.s}%, {color.hsl.l}%
                      </code>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => copyToClipboard(color.hex, index)}
                    >
                      {copiedIndex === index ? (
                        <Check className="w-3 h-3 text-green-500" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};