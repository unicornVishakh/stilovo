import { Award, Users, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Award,
      number: '#1',
      label: 'Top Furniture Brand',
      description: 'Leading furniture brand in North East India'
    },
    {
      icon: Users,
      number: '10K+',
      label: 'Happy Customers',
      description: 'Trusted by families across the region'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Customer Support',
      description: 'Always here to help you'
    },
    {
      icon: Heart,
      number: '100%',
      label: 'Satisfaction',
      description: 'Quality guarantee on all products'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-semibold mb-6">
              Preferred Choice for Hotels, Resorts & Dream Homes
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Stilovo, we are the top furniture brand in North East India, trusted by hotels, resorts, 
              and homeowners who demand excellence. Our carefully curated collection combines contemporary 
              design with exceptional craftsmanship, making us the preferred choice for creating stunning spaces.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Premium Quality Materials</h4>
                  <p className="text-muted-foreground">Sourced from trusted suppliers worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Craftsmanship</h4>
                  <p className="text-muted-foreground">Handcrafted by skilled artisans with attention to detail</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-accent rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Contemporary Design</h4>
                  <p className="text-muted-foreground">Modern aesthetics that stand the test of time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-smooth">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-brand-accent/20 rounded-full">
                      <stat.icon className="h-6 w-6 text-brand-black" />
                    </div>
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;