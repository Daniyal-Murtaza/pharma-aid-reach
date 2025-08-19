import { Shield, Phone, Mail, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">Aspire</h3>
            </div>
            <p className="text-white/80 text-sm">
              Your trusted global partner in pharmaceuticals and healthcare solutions. 
              Serving healthcare providers worldwide with quality products and reliable service.
            </p>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-success" />
              <span className="text-sm font-medium">Service-Disabled Veteran-Owned Small Business</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/products" className="block text-white/80 hover:text-white transition-colors text-sm">
                Products & Services
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>PPE & Medical Supplies</p>
              <p>Research Equipment</p>
              <p>Educational Materials</p>
              <p>Laboratory Equipment</p>
              <p>Training Resources</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-white/60 mt-1" />
                <span className="text-white/80">
                  Global Distribution Network<br />
                  USA • Mexico • Central Asia • Africa
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-white/80">info@aspire.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Aspire. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-white/60 text-xs">Certifications:</span>
            <div className="flex items-center gap-2 text-xs">
              <span className="bg-white/20 px-2 py-1 rounded">FDA</span>
              <span className="bg-white/20 px-2 py-1 rounded">EU-GMP</span>
              <span className="bg-white/20 px-2 py-1 rounded">ANDA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;