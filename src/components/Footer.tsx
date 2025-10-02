import { MapPin, Phone, Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import stilovoLogo from '@/assets/stilovo-logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <img 
              src={stilovoLogo} 
              alt="Stilovo Modern Furniture" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-brand-white/80 leading-relaxed mb-6 max-w-md">
              Transform your living spaces with our curated collection of modern furniture. 
              Quality, style, and comfort come together in every piece we offer.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/stilovo.slg/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/stilovo-modern-furniture" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/919609646000" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-smooth"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-brand-white/80 hover:text-brand-accent transition-fast">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-brand-white/80 hover:text-brand-accent transition-fast">
                  Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-brand-white/80 hover:text-brand-accent transition-fast">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-brand-white/80 hover:text-brand-accent transition-fast">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-brand-white/80 hover:text-brand-accent transition-fast">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div className="text-brand-white/80 text-sm leading-relaxed">
                  Stilovo Modern Furniture<br />
                  Orchid Building<br />
                  Near Vega Circle Mall<br />
                  Siliguri
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-accent" />
                <span className="text-brand-white/80">96096 46000</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-accent" />
                <span className="text-brand-white/80">info@stilovo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-brand-white/60 text-sm">
              © 2024 Stilovo Modern Furniture. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-brand-white/60 hover:text-brand-accent transition-fast">
                Privacy Policy
              </a>
              <a href="#" className="text-brand-white/60 hover:text-brand-accent transition-fast">
                Terms of Service
              </a>
              <a href="#" className="text-brand-white/60 hover:text-brand-accent transition-fast">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;