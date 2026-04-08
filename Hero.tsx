import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/kashmir-landscape/1920/1080?blur=2" 
          alt="Kashmiri Landscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-cream/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-brand-olive uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Authentic Artisanal Wear
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] text-brand-ink mb-6">
              The Soul of <br />
              <span className="italic text-brand-olive">Kashmir</span>
            </h1>
            <p className="text-lg text-brand-ink/80 max-w-md mb-8 leading-relaxed">
              Experience the timeless elegance of hand-woven Pashmina and intricate embroidery. 
              Crafted in the valley, delivered to your doorstep anywhere in India.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-olive text-white px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-brand-olive/90 transition-all flex items-center gap-2 group">
                Shop Collection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-brand-olive text-brand-olive px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-brand-olive hover:text-white transition-all">
                Our Story
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="pill-image aspect-[3/4] shadow-2xl border-8 border-white/50">
                <img 
                  src="https://picsum.photos/seed/kashmiri-model/800/1200" 
                  alt="Kashmiri Craft" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-saffron/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-olive/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-olive/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-olive/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
