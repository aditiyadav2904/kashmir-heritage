import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';
import { Truck, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />

        {/* Features Section */}
        <section className="py-16 bg-white border-y border-brand-olive/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Truck size={24} />, title: "Pan-India Shipping", desc: "Free delivery to every corner of India" },
                { icon: <ShieldCheck size={24} />, title: "Authentic Quality", desc: "100% genuine Kashmiri craftsmanship" },
                { icon: <Sparkles size={24} />, title: "Hand-Embroidered", desc: "Intricate work by master artisans" },
                { icon: <MapPin size={24} />, title: "Direct from Valley", desc: "Sourced directly from Srinagar" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-3xl hover:bg-brand-cream transition-colors group">
                  <div className="text-brand-olive group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-brand-ink/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-olive uppercase tracking-[0.3em] text-xs font-bold mb-4 inline-block">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Signature Collections</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-full text-sm uppercase tracking-widest font-bold transition-all border ${
                    activeCategory === category 
                      ? 'bg-brand-olive text-white border-brand-olive shadow-lg shadow-brand-olive/20' 
                      : 'bg-white text-brand-olive border-brand-olive/10 hover:border-brand-olive/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Artisans Section */}
        <section className="py-24 bg-brand-olive text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="pill-image aspect-square max-w-md mx-auto border-8 border-white/10">
                  <img 
                    src="https://picsum.photos/seed/artisan/800/800" 
                    alt="Artisan at work" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand-saffron p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
                  <p className="font-serif text-xl italic leading-relaxed">
                    "Every stitch tells a story of patience, heritage, and the beauty of our valley."
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <span className="uppercase tracking-[0.3em] text-xs font-bold opacity-60">
                  The Hands Behind the Craft
                </span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                  Empowering the <br />
                  <span className="italic opacity-80">Artisans of Kashmir</span>
                </h2>
                <p className="text-lg opacity-70 leading-relaxed">
                  We work directly with over 500 master artisans in Srinagar and surrounding villages. 
                  By choosing Kashmir Heritage, you're not just buying a garment; you're supporting 
                  a centuries-old legacy and ensuring fair wages for the craftsmen.
                </p>
                <button className="bg-white text-brand-olive px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-cream transition-all">
                  Meet the Artisans
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-brand-cream">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the Heritage Circle</h2>
            <p className="text-brand-ink/60 mb-10 leading-relaxed">
              Subscribe to receive updates on new collections, artisan stories, and exclusive offers. 
              Get 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-8 py-4 rounded-full bg-white border border-brand-olive/10 focus:outline-none focus:border-brand-olive transition-colors"
              />
              <button className="bg-brand-olive text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-olive/90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
