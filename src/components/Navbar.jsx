import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const logoUrl = "/algobucks_logo.png";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Algo Trading', path: '/algo' },
    
  ];
  // Define scroll handler
const scrollDown = () => {
  window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
};

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img
              src={logoUrl}
              alt="Algobucks Consultancy Logo"
              className={`h-14 md:h-20 mr-2 transition-all duration-300 ${!scrolled ? 'invert brightness-400' : ''}`}
            />
            
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'text-primary font-semibold' : (scrolled ? 'text-gray-600' : 'text-gray-200 hover:text-white')}`}
            >
              {link.name}
            </Link>
          ))}
          <Button onClick={scrollDown} className="button-gradient">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`${scrolled || isOpen ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-lg py-2 ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-gray-600'}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={() => { closeMenu(); scrollDown(); }} className="button-gradient w-full mt-4">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;