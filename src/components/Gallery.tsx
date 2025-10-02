import { useState } from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-living-room.jpg';
import diningImage from '@/assets/dining-furniture.jpg';
import bedroomImage from '@/assets/bedroom-furniture.jpg';
import officeImage from '@/assets/office-furniture.jpg';
import livingRoomImage from '@/assets/living-room-furniture.jpg';
import hotelImage from '@/assets/hotel-furniture.jpg';
import resortImage from '@/assets/resort-furniture.jpg';
import dreamHomeImage from '@/assets/dream-home-furniture.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Living Room', 'Dining Room', 'Bedroom', 'Office', 'Hotels', 'Resorts', 'Dream Homes'];
  
  const galleryItems = [
    {
      id: 1,
      image: livingRoomImage,
      title: 'Modern Living Collection',
      category: 'Living Room',
      description: 'Contemporary living room furniture with elegant design'
    },
    {
      id: 2,
      image: diningImage,
      title: 'Executive Dining Set',
      category: 'Dining Room',
      description: 'Elegant dining collection for memorable meals'
    },
    {
      id: 3,
      image: bedroomImage,
      title: 'Luxury Bedroom Suite',
      category: 'Bedroom',
      description: 'Premium bedroom furniture for ultimate comfort'
    },
    {
      id: 4,
      image: officeImage,
      title: 'Professional Workspace',
      category: 'Office',
      description: 'Modern office setup for productivity'
    },
    {
      id: 5,
      image: hotelImage,
      title: 'Hotel Furniture Collection',
      category: 'Hotels',
      description: 'Premium furniture solutions for hospitality industry'
    },
    {
      id: 6,
      image: resortImage,
      title: 'Resort Furniture Suite',
      category: 'Resorts',
      description: 'Luxury resort furniture for relaxation and comfort'
    },
    {
      id: 7,
      image: dreamHomeImage,
      title: 'Dream Home Collection',
      category: 'Dream Homes',
      description: 'Complete home furniture solutions for modern living'
    },
    {
      id: 8,
      image: heroImage,
      title: 'Sophisticated Living Space',
      category: 'Living Room',
      description: 'Modern living room with contemporary furniture'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-6">
            Spaces transformed by Stilovo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our stunning collection of modern furniture across different categories.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-xl transition-smooth"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                <div className="text-center text-brand-white p-6">
                  <h3 className="text-2xl font-display font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-white/90 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-brand-accent text-brand-black text-sm font-medium px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;