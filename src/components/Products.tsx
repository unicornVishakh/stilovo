import { useState } from 'react';
import { Button } from './ui/button';
import sofa1 from '@/assets/sofa-1.jpg';
import sofa2 from '@/assets/sofa-2.jpg';
import sofa3 from '@/assets/sofa-3.jpg';
import dining1 from '@/assets/dining-1.jpg';
import dining2 from '@/assets/dining-2.jpg';
import dining3 from '@/assets/dining-3.jpg';
import decor1 from '@/assets/decor-1.jpg';
import decor2 from '@/assets/decor-2.jpg';
import decor3 from '@/assets/decor-3.jpg';
import rug1 from '@/assets/rug-1.png';
import rug2 from '@/assets/rug-2.png';
import rug3 from '@/assets/rug-3.png';
import carpet1 from '@/assets/carpet-1.png';
import carpet2 from '@/assets/carpet-2.png';
import carpet3 from '@/assets/carpet-3.png';
import bed1 from '@/assets/bed-1.jpg';
import bed2 from '@/assets/bed-2.jpg';
import bed3 from '@/assets/bed-3.jpg';
import bed4 from '@/assets/bed-4.jpg';
import bed5 from '@/assets/bed-5.jpg';
import bed6 from '@/assets/bed-6.jpg';
import wardrobe1 from '@/assets/wardrobe-1.jpg';
import wardrobe2 from '@/assets/wardrobe-2.jpg';
import wardrobe3 from '@/assets/wardrobe-3.jpg';
import wardrobe4 from '@/assets/wardrobe-4.jpg';
import wardrobe5 from '@/assets/wardrobe-5.jpg';
import wardrobe6 from '@/assets/wardrobe-6.jpg';
import bar1 from '@/assets/bar-1.jpg';
import bar2 from '@/assets/bar-2.jpg';
import bar3 from '@/assets/bar-3.jpg';
import bar4 from '@/assets/bar-4.jpg';
import bar5 from '@/assets/bar-5.jpg';
import bar6 from '@/assets/bar-6.jpg';
import office1 from '@/assets/office-1.jpg';
import office2 from '@/assets/office-2.jpg';
import office3 from '@/assets/office-3.jpg';
import office4 from '@/assets/office-4.jpg';
import office5 from '@/assets/office-5.jpg';
import office6 from '@/assets/office-6.jpg';
import furnishing1 from '@/assets/furnishing-1.jpg';
import furnishing2 from '@/assets/furnishing-2.jpg';
import furnishing3 from '@/assets/furnishing-3.jpg';
import furnishing4 from '@/assets/furnishing-4.jpg';
import furnishing5 from '@/assets/furnishing-5.jpg';
import furnishing6 from '@/assets/furnishing-6.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Sectional Sofas');

  const categories = ['Sofas & Seating', 'Dining Tables', 'Home Decor', 'Rugs & Carpets', 'Beds & Mattresses', 'Wardrobes', 'Bar Furniture', 'Office Furniture', 'Furnishings'];

  const products = [
    { image: sofa1, title: 'Luxury Sofa Set', category: 'Sofas & Seating', description: 'Elegant comfort for your living space' },
    { image: sofa2, title: '3 Seater Sofa', category: 'Sofas & Seating', description: 'Perfect for family rooms' },
    { image: sofa3, title: 'Classic Recliner', category: 'Sofas & Seating', description: 'Timeless comfort and style' },
    { image: decor1, title: 'Lounge Chair', category: 'Sofas & Seating', description: 'Sophisticated seating' },
    { image: decor2, title: 'Accent Chair', category: 'Sofas & Seating', description: 'Statement piece' },
    { image: decor3, title: 'Wing Chair', category: 'Sofas & Seating', description: 'Classic elegance' },
    { image: dining1, title: '6 Seater Dining Set', category: 'Dining Tables', description: 'Perfect for family gatherings' },
    { image: dining2, title: '4 Seater Dining Table', category: 'Dining Tables', description: 'Contemporary elegance' },
    { image: dining3, title: '8 Seater Dining Set', category: 'Dining Tables', description: 'Entertain in style' },
    { image: sofa1, title: '2 Seater Dining Table', category: 'Dining Tables', description: 'Intimate dining' },
    { image: sofa2, title: 'Marble Top Dining Table', category: 'Dining Tables', description: 'Luxury dining' },
    { image: sofa3, title: 'Wooden Dining Set', category: 'Dining Tables', description: 'Natural beauty' },
    { image: decor1, title: 'Wall Art', category: 'Home Decor', description: 'Transform your walls' },
    { image: decor2, title: 'Decorative Vases', category: 'Home Decor', description: 'Add charm to any space' },
    { image: decor3, title: 'Ornate Mirror', category: 'Home Decor', description: 'Reflect your style' },
    { image: rug1, title: 'Decorative Lights', category: 'Home Decor', description: 'Illuminate with style' },
    { image: rug2, title: 'Cushion Sets', category: 'Home Decor', description: 'Comfort and color' },
    { image: rug3, title: 'Photo Frames', category: 'Home Decor', description: 'Cherish memories' },
    { image: rug1, title: 'Floral Rug', category: 'Rugs & Carpets', description: 'Beautiful hand-tufted design' },
    { image: rug2, title: 'Contemporary Rug', category: 'Rugs & Carpets', description: 'Modern patterns and colors' },
    { image: rug3, title: 'Abstract Rug', category: 'Rugs & Carpets', description: 'Artistic expression for floors' },
    { image: carpet1, title: 'Geometric Carpet', category: 'Rugs & Carpets', description: 'Bold modern design' },
    { image: carpet2, title: 'Traditional Carpet', category: 'Rugs & Carpets', description: 'Classic elegance' },
    { image: carpet3, title: 'Heritage Carpet', category: 'Rugs & Carpets', description: 'Timeless craftsmanship' },
    { image: bed1, title: 'King Size Bed', category: 'Beds & Mattresses', description: 'Luxury comfort' },
    { image: bed2, title: 'Platform Bed', category: 'Beds & Mattresses', description: 'Contemporary design' },
    { image: bed3, title: 'Tufted Bed', category: 'Beds & Mattresses', description: 'Elegant comfort' },
    { image: bed4, title: 'Storage Bed', category: 'Beds & Mattresses', description: 'Functional beauty' },
    { image: bed5, title: 'Designer Bed', category: 'Beds & Mattresses', description: 'Premium quality' },
    { image: bed6, title: 'Canopy Bed', category: 'Beds & Mattresses', description: 'Sophisticated style' },
    { image: wardrobe1, title: 'Sliding Door Wardrobe', category: 'Wardrobes', description: 'Space-saving design' },
    { image: wardrobe2, title: 'Mirror Wardrobe', category: 'Wardrobes', description: 'Classic storage' },
    { image: wardrobe3, title: 'Walk-in Wardrobe', category: 'Wardrobes', description: 'Luxury organization' },
    { image: wardrobe4, title: 'LED Wardrobe', category: 'Wardrobes', description: 'Modern elegance' },
    { image: wardrobe5, title: 'Built-in Wardrobe', category: 'Wardrobes', description: 'Custom storage' },
    { image: wardrobe6, title: 'Minimalist Wardrobe', category: 'Wardrobes', description: 'Sleek design' },
    { image: bar1, title: 'Bar Cabinet', category: 'Bar Furniture', description: 'Elegant entertaining' },
    { image: bar2, title: 'Bar Counter Set', category: 'Bar Furniture', description: 'Home bar setup' },
    { image: bar3, title: 'LED Bar Unit', category: 'Bar Furniture', description: 'Luxury display' },
    { image: bar4, title: 'Bar Trolley', category: 'Bar Furniture', description: 'Mobile convenience' },
    { image: bar5, title: 'Pub Table Set', category: 'Bar Furniture', description: 'Contemporary style' },
    { image: bar6, title: 'Designer Bar Cabinet', category: 'Bar Furniture', description: 'Sophisticated storage' },
    { image: office1, title: 'Executive Desk', category: 'Office Furniture', description: 'Professional workspace' },
    { image: office2, title: 'Office Workstation', category: 'Office Furniture', description: 'Functional design' },
    { image: office3, title: 'Conference Table', category: 'Office Furniture', description: 'Meeting space' },
    { image: office4, title: 'Office Bookshelf', category: 'Office Furniture', description: 'Organized storage' },
    { image: office5, title: 'Ergonomic Chair', category: 'Office Furniture', description: 'Comfort seating' },
    { image: office6, title: 'Standing Desk', category: 'Office Furniture', description: 'Modern workspace' },
    { image: furnishing1, title: 'Elegant Curtains', category: 'Furnishings', description: 'Window dressing' },
    { image: furnishing2, title: 'Throw Pillows', category: 'Furnishings', description: 'Decorative comfort' },
    { image: furnishing3, title: 'Luxury Bedding', category: 'Furnishings', description: 'Premium textiles' },
    { image: furnishing4, title: 'Table Runner Set', category: 'Furnishings', description: 'Dining decor' },
    { image: furnishing5, title: 'Window Blinds', category: 'Furnishings', description: 'Modern covering' },
    { image: furnishing6, title: 'Throw Blanket', category: 'Furnishings', description: 'Cozy warmth' },
  ];

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of premium furniture and home decor
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{product.description}</p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => {
                      window.open('https://wa.me/919609646000', '_blank');
                    }}
                  >
                    Inquire Now
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => {
                window.location.href = '/products';
              }, 300);
            }}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
