import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/a9beeb6a-a976-4416-99c6-67ecce2e35be/702d9070f06ddc21d05ccf3d623fbec3.png";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            
            <Link to="/">
              <h2> ALGOBUCKS </h2>
              
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming businesses with innovative solutions and strategic insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-lg font-semibold mb-4">Our Services</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Business Strategy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Market Analysis</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Financial Advisory</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Operational Excellence</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold mb-4">Contact Us</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-gray-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Dwarka mor, New Delhi</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-gray-400" />
                <span className="text-gray-400">+91 8178910222</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-gray-400" />
                <span className="text-gray-400">info@algobucks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Algobucks Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;