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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sofas & Seating', 'Dining Tables', 'Home Decor', 'Rugs & Carpets'];

  const products = [
    { image: sofa1, title: 'Luxury Sofa Set', category: 'Sofas & Seating', description: 'Elegant comfort for your living space' },
    { image: sofa2, title: 'L-Shaped Sectional', category: 'Sofas & Seating', description: 'Modern design meets functionality' },
    { image: sofa3, title: 'Classic Recliner', category: 'Sofas & Seating', description: 'Timeless comfort and style' },
    { image: dining1, title: 'Dining Table Set', category: 'Dining Tables', description: 'Perfect for family gatherings' },
    { image: dining2, title: 'Marble Top Table', category: 'Dining Tables', description: 'Contemporary elegance' },
    { image: dining3, title: 'Dining Chairs', category: 'Dining Tables', description: 'Comfort meets sophistication' },
    { image: decor1, title: 'Wall Art', category: 'Home Decor', description: 'Transform your walls' },
    { image: decor2, title: 'Decorative Vases', category: 'Home Decor', description: 'Add charm to any space' },
    { image: decor3, title: 'Ornate Mirror', category: 'Home Decor', description: 'Reflect your style' },
    { image: rug1, title: 'Floral Rug', category: 'Rugs & Carpets', description: 'Beautiful hand-tufted design' },
    { image: rug2, title: 'Contemporary Rug', category: 'Rugs & Carpets', description: 'Modern patterns and colors' },
    { image: rug3, title: 'Abstract Rug', category: 'Rugs & Carpets', description: 'Artistic expression for floors' },
    { image: carpet1, title: 'Geometric Carpet', category: 'Rugs & Carpets', description: 'Bold modern design' },
    { image: carpet2, title: 'Traditional Carpet', category: 'Rugs & Carpets', description: 'Classic elegance' },
    { image: carpet3, title: 'Heritage Carpet', category: 'Rugs & Carpets', description: 'Timeless craftsmanship' },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
                      const contact = document.getElementById('contact');
                      contact?.scrollIntoView({ behavior: 'smooth' });
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
