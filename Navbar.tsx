import React from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-olive p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl tracking-widest text-brand-olive font-bold">
              KASHMIR HERITAGE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-sm uppercase tracking-widest font-medium hover:text-brand-saffron transition-colors">Collections</a>
            <a href="#" className="text-sm uppercase tracking-widest font-medium hover:text-brand-saffron transition-colors">Our Story</a>
            <a href="#" className="text-sm uppercase tracking-widest font-medium hover:text-brand-saffron transition-colors">Craftsmanship</a>
            <a href="#" className="text-sm uppercase tracking-widest font-medium hover:text-brand-saffron transition-colors">Shipping</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-brand-olive p-2 hover:text-brand-saffron transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="text-brand-olive p-2 hover:text-brand-saffron transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-saffron text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-b border-brand-olive/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#" className="block text-lg font-serif tracking-wide">Collections</a>
              <a href="#" className="block text-lg font-serif tracking-wide">Our Story</a>
              <a href="#" className="block text-lg font-serif tracking-wide">Craftsmanship</a>
              <a href="#" className="block text-lg font-serif tracking-wide">Shipping</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
