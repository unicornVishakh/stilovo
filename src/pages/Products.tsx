import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
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
import carpet4 from '@/assets/carpet-4.png';
import carpet5 from '@/assets/carpet-5.png';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sofas & Seating', 'Dining Tables', 'Home Decor', 'Rugs & Carpets'];

  const products = [
    { image: sofa1, title: 'Luxury Sofa Set', category: 'Sofas & Seating', description: 'Elegant comfort for your living space with premium upholstery' },
    { image: sofa2, title: 'L-Shaped Sectional', category: 'Sofas & Seating', description: 'Modern design meets functionality for spacious homes' },
    { image: sofa3, title: 'Classic Recliner', category: 'Sofas & Seating', description: 'Timeless comfort and style with adjustable positions' },
    { image: dining1, title: 'Dining Table Set', category: 'Dining Tables', description: 'Perfect for family gatherings with seating for 6' },
    { image: dining2, title: 'Marble Top Table', category: 'Dining Tables', description: 'Contemporary elegance with durable materials' },
    { image: dining3, title: 'Dining Chairs', category: 'Dining Tables', description: 'Comfort meets sophistication with ergonomic design' },
    { image: decor1, title: 'Wall Art', category: 'Home Decor', description: 'Transform your walls with artistic metal designs' },
    { image: decor2, title: 'Decorative Vases', category: 'Home Decor', description: 'Add charm to any space with ceramic elegance' },
    { image: decor3, title: 'Ornate Mirror', category: 'Home Decor', description: 'Reflect your style with gold-finished frames' },
    { image: rug1, title: 'Floral Hand-Tufted Rug', category: 'Rugs & Carpets', description: 'Beautiful traditional design with vibrant colors' },
    { image: rug2, title: 'Contemporary Floral Rug', category: 'Rugs & Carpets', description: 'Modern patterns with warm color palette' },
    { image: rug3, title: 'Abstract Wave Rug', category: 'Rugs & Carpets', description: 'Artistic expression with flowing patterns' },
    { image: carpet1, title: 'Geometric Modern Carpet', category: 'Rugs & Carpets', description: 'Bold contemporary design for modern spaces' },
    { image: carpet2, title: 'Traditional Persian Carpet', category: 'Rugs & Carpets', description: 'Classic elegance with intricate details' },
    { image: carpet3, title: 'Heritage Floral Carpet', category: 'Rugs & Carpets', description: 'Timeless craftsmanship with delicate motifs' },
    { image: carpet4, title: 'Botanical Print Carpet', category: 'Rugs & Carpets', description: 'Nature-inspired design for elegant interiors' },
    { image: carpet5, title: 'Traditional Round Carpet', category: 'Rugs & Carpets', description: 'Unique circular design with rich colors' },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-primary">Our Product Collection</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our complete range of premium furniture, home decor, and accessories. 
              Each piece is crafted with attention to detail and designed to elevate your living spaces.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
                size="lg"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs rounded-full mb-3">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{product.description}</p>
                    <div className="flex gap-2">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => {
                          window.location.href = '/#contact';
                        }}
                      >
                        Inquire Now
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        onClick={() => {
                          window.open('https://wa.me/919609646000', '_blank');
                        }}
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;
