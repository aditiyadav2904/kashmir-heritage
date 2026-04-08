import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Truck } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-ink/40 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-olive/10 flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} className="text-brand-olive" />
                <h2 className="font-serif text-2xl">Your Bag</h2>
                <span className="text-xs font-bold bg-brand-olive/10 text-brand-olive px-2 py-1 rounded-full">
                  {items.length}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-brand-cream rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag size={64} className="mb-4" />
                  <p className="font-serif text-xl">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-sm uppercase tracking-widest font-bold underline underline-offset-4"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div 
                      layout
                      key={item.id} 
                      className="flex gap-4 group"
                    >
                      <div className="w-24 aspect-[3/4] rounded-2xl overflow-hidden flex-shrink-0 border border-brand-olive/10">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                            <button 
                              onClick={() => onRemove(item.id)}
                              className="text-brand-ink/40 hover:text-brand-saffron transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-xs text-brand-ink/60 uppercase tracking-widest mt-1">{item.category}</p>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-brand-olive/20 rounded-full px-2 py-1">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:text-brand-saffron transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:text-brand-saffron transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-serif font-bold text-brand-olive">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-brand-olive/10 space-y-4">
                <div className="flex items-center gap-2 text-brand-emerald text-xs font-bold uppercase tracking-widest bg-brand-emerald/5 p-3 rounded-xl">
                  <Truck size={16} />
                  Free Shipping All Over India
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-brand-ink/60 text-sm">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-brand-ink/60 text-sm">
                    <span>Shipping</span>
                    <span className="text-brand-emerald font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif pt-2 border-t border-brand-olive/5">
                    <span>Total</span>
                    <span className="font-bold">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button className="w-full bg-brand-olive text-white py-4 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-olive/90 transition-all flex items-center justify-center gap-2 group">
                  Proceed to Checkout
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
