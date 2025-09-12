import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import diningImage from '@/assets/dining-furniture.jpg';
import bedroomImage from '@/assets/bedroom-furniture.jpg';
import officeImage from '@/assets/office-furniture.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Executive Dining Collection',
      category: 'Dining Room',
      image: diningImage,
      price: '₹89,999',
      rating: 4.8,
      description: 'Elegant dining set with modern black chairs and sophisticated table design.'
    },
    {
      id: 2,
      name: 'Luxury Bedroom Suite',
      category: 'Bedroom',
      image: bedroomImage,
      price: '₹1,24,999',
      rating: 4.9,
      description: 'Contemporary bedroom furniture with sleek lines and premium finishes.'
    },
    {
      id: 3,
      name: 'Professional Office Setup',
      category: 'Office',
      image: officeImage,
      price: '₹65,999',
      rating: 4.7,
      description: 'Complete office furniture solution for the modern workspace.'
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden shadow-elegant hover:shadow-xl transition-smooth">
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
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-semibold">
                    {product.price}
                  </span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="default">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;