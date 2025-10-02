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
import sofa4 from '@/assets/sofa-4.jpg';
import sofa5 from '@/assets/sofa-5.jpg';
import sofa6 from '@/assets/sofa-6.jpg';
import dining4 from '@/assets/dining-4.jpg';
import dining5 from '@/assets/dining-5.jpg';
import dining6 from '@/assets/dining-6.jpg';
import decor4 from '@/assets/decor-4.jpg';
import decor5 from '@/assets/decor-5.jpg';
import decor6 from '@/assets/decor-6.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sofas & Seating', 'Dining Tables', 'Home Decor', 'Rugs & Carpets', 'Beds & Mattresses', 'Wardrobes', 'Bar Furniture', 'Office Furniture', 'Furnishings'];

  const products = [
    { image: sofa1, title: 'Luxury Sofa Set', category: 'Sofas & Seating', description: 'Elegant comfort for your living space with premium upholstery' },
    { image: sofa2, title: '3 Seater Sofa', category: 'Sofas & Seating', description: 'Perfect for family rooms with modern design' },
    { image: sofa3, title: 'Classic Recliner', category: 'Sofas & Seating', description: 'Timeless comfort and style with adjustable positions' },
    { image: sofa4, title: '2 Seater Loveseat', category: 'Sofas & Seating', description: 'Compact modern design with clean lines' },
    { image: sofa5, title: 'Curved Modern Sofa', category: 'Sofas & Seating', description: 'Contemporary elegance with button tufting' },
    { image: sofa6, title: 'Chesterfield Sofa', category: 'Sofas & Seating', description: 'Luxury velvet upholstery with rolled arms' },
    { image: dining1, title: '6 Seater Dining Set', category: 'Dining Tables', description: 'Perfect for family gatherings with seating for 6' },
    { image: dining2, title: '4 Seater Dining Table', category: 'Dining Tables', description: 'Contemporary elegance with durable materials' },
    { image: dining3, title: '8 Seater Dining Set', category: 'Dining Tables', description: 'Entertain in style with spacious seating' },
    { image: dining4, title: '2 Seater Dining Table', category: 'Dining Tables', description: 'Intimate dining for cozy spaces with modern design' },
    { image: dining5, title: 'Marble Top Dining Table', category: 'Dining Tables', description: 'Luxury dining with premium marble finish and gold legs' },
    { image: dining6, title: 'Wooden Dining Set', category: 'Dining Tables', description: 'Natural beauty with crafted oak excellence' },
    { image: decor1, title: 'Wall Art', category: 'Home Decor', description: 'Transform your walls with artistic metal designs' },
    { image: decor2, title: 'Decorative Vases', category: 'Home Decor', description: 'Add charm to any space with ceramic elegance' },
    { image: decor3, title: 'Ornate Mirror', category: 'Home Decor', description: 'Reflect your style with gold-finished frames' },
    { image: decor4, title: 'Abstract Wall Art', category: 'Home Decor', description: 'Modern canvas art with gold and navy geometric patterns' },
    { image: decor5, title: 'Photo Frame Set', category: 'Home Decor', description: 'Display cherished memories in elegant gold and silver frames' },
    { image: decor6, title: 'Luxury Cushion Sets', category: 'Home Decor', description: 'Premium throw pillows with coordinating textures and colors' },
    { image: rug1, title: 'Floral Hand-Tufted Rug', category: 'Rugs & Carpets', description: 'Beautiful traditional design with vibrant colors' },
    { image: rug2, title: 'Contemporary Floral Rug', category: 'Rugs & Carpets', description: 'Modern patterns with warm color palette' },
    { image: rug3, title: 'Abstract Wave Rug', category: 'Rugs & Carpets', description: 'Artistic expression with flowing patterns' },
    { image: carpet1, title: 'Geometric Modern Carpet', category: 'Rugs & Carpets', description: 'Bold contemporary design for modern spaces' },
    { image: carpet2, title: 'Traditional Persian Carpet', category: 'Rugs & Carpets', description: 'Classic elegance with intricate details' },
    { image: carpet3, title: 'Heritage Floral Carpet', category: 'Rugs & Carpets', description: 'Timeless craftsmanship with delicate motifs' },
    { image: bed1, title: 'King Size Bed', category: 'Beds & Mattresses', description: 'Luxury comfort with premium upholstery' },
    { image: bed2, title: 'Platform Bed', category: 'Beds & Mattresses', description: 'Contemporary design with clean lines' },
    { image: bed3, title: 'Tufted Bed', category: 'Beds & Mattresses', description: 'Elegant comfort with sophisticated detailing' },
    { image: bed4, title: 'Storage Bed', category: 'Beds & Mattresses', description: 'Functional beauty with built-in storage' },
    { image: bed5, title: 'Designer Bed', category: 'Beds & Mattresses', description: 'Premium quality with leather accents' },
    { image: bed6, title: 'Canopy Bed', category: 'Beds & Mattresses', description: 'Sophisticated style with elegant drapery' },
    { image: wardrobe1, title: 'Sliding Door Wardrobe', category: 'Wardrobes', description: 'Space-saving design with modern aesthetics' },
    { image: wardrobe2, title: 'Mirror Wardrobe', category: 'Wardrobes', description: 'Classic storage with mirrored elegance' },
    { image: wardrobe3, title: 'Walk-in Wardrobe', category: 'Wardrobes', description: 'Luxury organization with customized sections' },
    { image: wardrobe4, title: 'LED Wardrobe', category: 'Wardrobes', description: 'Modern elegance with integrated lighting' },
    { image: wardrobe5, title: 'Built-in Wardrobe', category: 'Wardrobes', description: 'Custom storage solutions for any space' },
    { image: wardrobe6, title: 'Minimalist Wardrobe', category: 'Wardrobes', description: 'Sleek design with handleless doors' },
    { image: bar1, title: 'Bar Cabinet', category: 'Bar Furniture', description: 'Elegant entertaining with glass shelves' },
    { image: bar2, title: 'Bar Counter Set', category: 'Bar Furniture', description: 'Home bar setup with stylish stools' },
    { image: bar3, title: 'LED Bar Unit', category: 'Bar Furniture', description: 'Luxury display with ambient lighting' },
    { image: bar4, title: 'Bar Trolley', category: 'Bar Furniture', description: 'Mobile convenience for entertaining' },
    { image: bar5, title: 'Pub Table Set', category: 'Bar Furniture', description: 'Contemporary style for home bars' },
    { image: bar6, title: 'Designer Bar Cabinet', category: 'Bar Furniture', description: 'Sophisticated storage with mirrored back' },
    { image: office1, title: 'Executive Desk', category: 'Office Furniture', description: 'Professional workspace with ergonomic chair' },
    { image: office2, title: 'Office Workstation', category: 'Office Furniture', description: 'Functional design with storage solutions' },
    { image: office3, title: 'Conference Table', category: 'Office Furniture', description: 'Meeting space with executive seating' },
    { image: office4, title: 'Office Bookshelf', category: 'Office Furniture', description: 'Organized storage for modern offices' },
    { image: office5, title: 'Ergonomic Chair', category: 'Office Furniture', description: 'Comfort seating with adjustable features' },
    { image: office6, title: 'Standing Desk', category: 'Office Furniture', description: 'Modern workspace with height adjustment' },
    { image: furnishing1, title: 'Elegant Curtains', category: 'Furnishings', description: 'Window dressing for luxury interiors' },
    { image: furnishing2, title: 'Throw Pillows', category: 'Furnishings', description: 'Decorative comfort for sofas and beds' },
    { image: furnishing3, title: 'Luxury Bedding', category: 'Furnishings', description: 'Premium textiles for restful sleep' },
    { image: furnishing4, title: 'Table Runner Set', category: 'Furnishings', description: 'Dining decor with matching placemats' },
    { image: furnishing5, title: 'Window Blinds', category: 'Furnishings', description: 'Modern covering for contemporary spaces' },
    { image: furnishing6, title: 'Throw Blanket', category: 'Furnishings', description: 'Cozy warmth with soft textures' },
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
