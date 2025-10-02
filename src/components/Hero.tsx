import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-living-room.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern Living Room - Stilovo Furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl text-brand-white">
          <h1 className="text-5xl lg:text-7xl font-display font-semibold mb-6 leading-tight">
            Modern Furniture
            <span className="block text-brand-accent">Redefined</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-brand-white/90 font-light leading-relaxed">
            Discover our curated collection of contemporary furniture that transforms 
            your space into a sophisticated sanctuary of comfort and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-brand-white text-brand-black hover:bg-brand-white/90 transition-smooth"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-brand-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;