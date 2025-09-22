import React, { useState, useRef } from 'react';
import { Search, Filter, Beaker, Microscope, Atom, Dna, FlaskConical } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ColorPaletteCard } from '@/components/ColorPaletteCard';
import { HeroSection } from '@/components/HeroSection';
import { colorPalettes, journalCategories } from '@/data/colorPalettes';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const palettesRef = useRef<HTMLDivElement>(null);

  // 过滤配色方案
  const filteredPalettes = colorPalettes.filter(palette => {
    const matchesSearch = palette.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         palette.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         palette.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || palette.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categoryIcons = {
    nature: Microscope,
    science: Beaker,
    cell: Dna,
    bioinformatics: FlaskConical,
    physics: Atom,
    chemistry: FlaskConical
  };

  const scrollToPalettes = () => {
    palettesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <HeroSection onGetStarted={scrollToPalettes} />

      {/* 配色方案区域 */}
      <div ref={palettesRef} className="relative z-10 container mx-auto px-4 py-16">
        {/* 搜索和筛选 */}
        <div className="mb-8 space-y-6">
          {/* 区域标题 */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              精选配色方案
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从世界顶级科研期刊中精心挑选的配色方案，为您的学术图表提供专业美观的颜色搭配
            </p>
          </div>

          {/* 搜索框 */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜索配色方案、期刊名称..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
            />
          </div>

          {/* 分类筛选 */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className="interactive-hover"
            >
              <Filter className="w-3 h-3 mr-1" />
              全部
            </Button>
            {Object.entries(journalCategories).map(([key, category]) => {
              const IconComponent = categoryIcons[key as keyof typeof categoryIcons];
              return (
                <Button
                  key={key}
                  variant={selectedCategory === key ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedCategory(key)}
                  className="interactive-hover"
                >
                  <IconComponent className="w-3 h-3 mr-1" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* 统计信息 */}
          <div className="text-center">
            <Badge variant="outline" className="bg-card/50 border-border/50 text-foreground">
              {filteredPalettes.length} 个配色方案
              {selectedCategory !== 'all' && ` • ${journalCategories[selectedCategory as keyof typeof journalCategories].name}`}
            </Badge>
          </div>
        </div>

        {/* 配色方案网格 */}
        {filteredPalettes.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPalettes.map(palette => (
              <ColorPaletteCard key={palette.id} palette={palette} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              未找到相关配色方案
            </h3>
            <p className="text-muted-foreground">
              请尝试使用其他关键词搜索或选择不同的分类
            </p>
          </div>
        )}

        {/* 页脚信息 */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>
            配色方案来源于 Nature、Science、Cell 等顶级期刊文献 • 
            <span className="mx-1">•</span>
            专为科研工作者设计
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;