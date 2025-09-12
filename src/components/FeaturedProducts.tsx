import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import diningImage from '@/assets/dining-furniture.jpg';
import bedroomImage from '@/assets/bedroom-furniture.jpg';
import officeImage from '@/assets/office-furniture.jpg';
import livingRoomImage from '@/assets/living-room-furniture.jpg';

const FeaturedProducts = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Modern Living Room Collection',
      category: 'Living Room',
      image: livingRoomImage,
      rating: 4.9,
      description: 'Contemporary living room set with comfortable seating and elegant design.'
    },
    {
      id: 2,
      name: 'Executive Dining Collection',
      category: 'Dining Room',
      image: diningImage,
      rating: 4.8,
      description: 'Elegant dining set with modern black chairs and sophisticated table design.'
    },
    {
      id: 3,
      name: 'Luxury Bedroom Suite',
      category: 'Bedroom',
      image: bedroomImage,
      rating: 4.9,
      description: 'Contemporary bedroom furniture with sleek lines and premium finishes.'
    },
    {
      id: 4,
      name: 'Professional Office Setup',
      category: 'Office',
      image: officeImage,
      rating: 4.7,
      description: 'Complete office furniture solution for the modern workspace.'
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-6">
            Featured Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that define modern living.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {products.map((product) => (
                <div key={product.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <Card className="group overflow-hidden shadow-elegant hover:shadow-xl transition-smooth h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-accent text-brand-black text-sm font-medium px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-display font-medium">{product.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-brand-accent text-brand-accent" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="flex justify-center">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center">
          <Button size="lg" variant="default" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;