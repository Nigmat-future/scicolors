import React, { useState } from 'react';
import { CheckCircle, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ColorSwatchProps {
  color: string;
  index: number;
  onCopy: (color: string, format: 'hex' | 'rgb') => void;
  isCopied?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ 
  color, 
  index, 
  onCopy, 
  isCopied = false,
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(color);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const handleClick = () => {
    onCopy(color, 'hex');
  };

  return (
    <div className="relative group">
      <div
        className={cn(
          "color-swatch relative border-2 border-border/30 overflow-hidden",
          sizeClasses[size],
          isCopied && "ring-2 ring-green-500 ring-offset-2 ring-offset-background"
        )}
        style={{ backgroundColor: color }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 复制成功指示器 */}
        {isCopied && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-green-400" />
          </div>
        )}

        {/* 悬停时的复制图标 */}
        {isHovered && !isCopied && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Copy className="w-4 h-4 text-white" />
          </div>
        )}

        {/* 颜色索引 */}
        <div className="absolute -bottom-1 -right-1 bg-background border border-border rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium text-foreground">
          {index + 1}
        </div>
      </div>

      {/* 悬停时显示颜色信息 */}
      {isHovered && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50 bg-popover border border-border rounded-lg p-3 shadow-lg min-w-[160px]">
          <div className="space-y-2 text-xs">
            <div className="font-medium text-foreground">颜色 {index + 1}</div>
            
            <div className="space-y-1">
              <button
                onClick={() => onCopy(color, 'hex')}
                className="w-full text-left p-1 rounded hover:bg-accent transition-colors"
              >
                <span className="text-muted-foreground">HEX: </span>
                <span className="font-mono text-foreground">{color}</span>
              </button>
              
              {rgb && (
                <button
                  onClick={() => onCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}
                  className="w-full text-left p-1 rounded hover:bg-accent transition-colors"
                >
                  <span className="text-muted-foreground">RGB: </span>
                  <span className="font-mono text-foreground">
                    {rgb.r}, {rgb.g}, {rgb.b}
                  </span>
                </button>
              )}
            </div>

            <div className="text-xs text-muted-foreground pt-1 border-t border-border">
              点击复制颜色代码
            </div>
          </div>

          {/* 箭头指示器 */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-popover border-l border-t border-border rotate-45"></div>
        </div>
      )}
    </div>
  );
};