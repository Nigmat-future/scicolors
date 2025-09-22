import React from 'react';
import { Beaker, Palette, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import scientificHeroBg from '@/assets/scientific-hero-bg.jpg';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const stats = [
    { icon: Palette, label: '配色方案', value: '10+' },
    { icon: Beaker, label: '顶级期刊', value: '6+' },
    { icon: Download, label: '即时复制', value: '100%' },
    { icon: Star, label: '专业推荐', value: '5★' }
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${scientificHeroBg})` }}
      />
      
      {/* 渐变覆盖层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80" />
      
      {/* 装饰性元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-32 h-32 top-10 left-10 bg-primary/10" />
        <div className="floating-orb w-24 h-24 top-1/3 right-20 bg-accent/10" style={{ animationDelay: '1s' }} />
        <div className="floating-orb w-40 h-40 bottom-20 left-1/4 bg-secondary/10" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* 主标题 */}
        <div className="mb-8">
          <h1 className="scientific-title text-5xl md:text-7xl mb-6">
            SCI 论文配色方案
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            精选 <span className="text-primary font-semibold">Nature</span>、
            <span className="text-secondary font-semibold">Science</span>、
            <span className="text-accent font-semibold">Cell</span> 等顶级期刊常用配色方案
            <br className="hidden md:block" />
            专为科研人员打造的专业配色工具
          </p>
        </div>

        {/* 特色亮点 */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-foreground">顶刊标准配色</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-foreground">多图表类型预览</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-foreground">一键复制代码</span>
          </div>
        </div>

        {/* 统计数据 */}
        <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="palette-card p-4 text-center interactive-hover"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 行动按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={onGetStarted}
            className="px-8 py-6 text-lg interactive-hover glow-primary"
          >
            <Palette className="w-5 h-5 mr-2" />
            开始选择配色
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
            className="px-8 py-6 text-lg interactive-hover bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80"
          >
            了解更多
          </Button>
        </div>

        {/* 信任标识 */}
        <div className="mt-12 text-xs text-muted-foreground">
          <p>
            配色方案来源于 Nature、Science、Cell 等顶级期刊文献
          </p>
        </div>
      </div>
    </section>
  );
};