import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  key?: React.Key;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-olive/5"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button className="bg-white text-brand-olive p-3 rounded-full hover:bg-brand-olive hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
            <Heart size={20} />
          </button>
          <button className="bg-white text-brand-olive p-3 rounded-full hover:bg-brand-olive hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <Eye size={20} />
          </button>
        </div>

        <div className="absolute top-4 left-4">
          <span className="bg-brand-cream/90 backdrop-blur-sm text-brand-olive text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-brand-olive/10">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-brand-ink group-hover:text-brand-olive transition-colors leading-tight">
            {product.name}
          </h3>
          <span className="font-serif text-lg font-bold text-brand-olive">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>
        
        <p className="text-sm text-brand-ink/60 line-clamp-2 mb-6 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {product.colors.map((color, idx) => (
              <div 
                key={idx} 
                className="w-3 h-3 rounded-full border border-brand-ink/10"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              ></div>
            ))}
          </div>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-olive hover:text-brand-saffron transition-colors group/btn"
          >
            <ShoppingCart size={16} className="group-hover/btn:-translate-y-0.5 transition-transform" />
            Add to Bag
          </button>
        </div>
      </div>
    </motion.div>
  );
}
