import React, { useState, useRef } from 'react';
import { Search, Filter, Beaker, Microscope, Atom, Dna, FlaskConical, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ColorPaletteCard } from '@/components/ColorPaletteCard';
import { HeroSection } from '@/components/HeroSection';
import { ImageColorExtractor } from '@/components/ImageColorExtractor';
import { colorPalettes, journalCategories } from '@/data/colorPalettes';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showExtractor, setShowExtractor] = useState(false);
  const palettesRef = useRef<HTMLDivElement>(null);

  // Filter color palettes
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

      {/* Color Palettes Section */}
      <div ref={palettesRef} className="relative z-10 container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-8 space-y-6">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Color Palettes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Carefully selected color schemes from world-class scientific journals, providing professional and beautiful color combinations for your academic charts
            </p>
          </div>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search palettes, journal names..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 border-border/50 focus:border-primary/50"
            />
          </div>

          {/* Category Filter and Image Extraction */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {/* Image Color Extraction Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowExtractor(true)}
              className="interactive-hover bg-gradient-primary/10 border-primary/30 hover:bg-gradient-primary/20 text-primary"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Extract Colors
            </Button>
            
            <div className="w-px h-4 bg-border/50" />
            
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className="interactive-hover"
            >
              <Filter className="w-3 h-3 mr-1" />
              All
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

          {/* Statistics */}
          <div className="text-center">
            <Badge variant="outline" className="bg-card/50 border-border/50 text-foreground">
              {filteredPalettes.length} color palettes
              {selectedCategory !== 'all' && ` • ${journalCategories[selectedCategory as keyof typeof journalCategories].name}`}
            </Badge>
          </div>
        </div>

        {/* Color Palette Grid */}
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
              No color palettes found
            </h3>
            <p className="text-muted-foreground">
              Try using different keywords or select a different category
            </p>
          </div>
        )}

        {/* Footer Information */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>
            Color schemes sourced from Nature, Science, Cell and other top journal publications • 
            <span className="mx-1">•</span>
            Designed specifically for researchers
          </p>
        </div>
      </div>

      {/* Image Color Extractor */}
      <ImageColorExtractor 
        isOpen={showExtractor} 
        onClose={() => setShowExtractor(false)} 
      />
    </div>
  );
};

export default Index;