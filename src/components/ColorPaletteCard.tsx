import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle, Eye, Palette } from 'lucide-react';
import { ColorSwatch } from './ColorSwatch';
import { ChartPreview } from './ChartPreview';
import { ColorPalette } from '@/data/colorPalettes';
import { toast } from '@/hooks/use-toast';

interface ColorPaletteCardProps {
  palette: ColorPalette;
}

export const ColorPaletteCard: React.FC<ColorPaletteCardProps> = ({ palette }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const copyToClipboard = async (text: string, type: 'hex' | 'rgb' | 'palette') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedColor(text);
      
      toast({
        title: "已复制!",
        description: `${type === 'palette' ? '配色方案' : '颜色代码'} 已复制到剪贴板`,
      });
      
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const copyFullPalette = () => {
    const paletteText = palette.colors.join(', ');
    copyToClipboard(paletteText, 'palette');
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  return (
    <Card className="palette-card group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              {palette.name}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              {palette.journal} • {palette.usage}
            </CardDescription>
          </div>
          <Badge 
            variant="secondary" 
            className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
          >
            {palette.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {palette.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* 颜色样本展示 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
              <Palette className="w-4 h-4" />
              配色方案
            </h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyFullPalette}
              className="h-8 px-3 text-xs hover:bg-primary/10"
            >
              {copiedColor === palette.colors.join(', ') ? (
                <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
              ) : (
                <Copy className="w-3 h-3 mr-1" />
              )}
              复制全部
            </Button>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {palette.colors.map((color, index) => (
              <ColorSwatch
                key={index}
                color={color}
                index={index}
                onCopy={(color, format) => copyToClipboard(color, format)}
                isCopied={copiedColor === color}
              />
            ))}
          </div>
        </div>

        {/* 图表类型 */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">适用图表类型</h4>
          <div className="flex flex-wrap gap-2">
            {palette.chartTypes.map((type, index) => (
              <span
                key={index}
                className="chart-type-badge"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* 图表预览 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-foreground">预览效果</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPreview(!showPreview)}
              className="h-8 px-3 text-xs hover:bg-primary/10"
            >
              <Eye className="w-3 h-3 mr-1" />
              {showPreview ? '隐藏' : '查看'}
            </Button>
          </div>
          
          {showPreview && (
            <div className="chart-preview p-4">
              <ChartPreview colors={palette.colors} />
            </div>
          )}
        </div>

        {/* 颜色代码详情 */}
        <div className="space-y-2 pt-2 border-t border-border/50">
          <h4 className="text-sm font-medium text-foreground">颜色代码</h4>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {palette.colors.map((color, index) => {
              const rgb = hexToRgb(color);
              return (
                <div key={index} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded border border-border/30"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-muted-foreground">Color {index + 1}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(color, 'hex')}
                      className="color-code hover:bg-primary/10 transition-colors"
                    >
                      {color}
                    </button>
                    {rgb && (
                      <button
                        onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}
                        className="color-code hover:bg-primary/10 transition-colors"
                      >
                        rgb({rgb.r}, {rgb.g}, {rgb.b})
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};