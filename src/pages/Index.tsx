import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Products from '@/components/Products';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Products />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
