import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl tracking-widest font-bold">KASHMIR HERITAGE</h2>
            <p className="text-brand-cream/60 text-sm leading-relaxed">
              Preserving the ancient crafts of the Kashmir valley. Each piece is a testament to the skill of our master artisans and the rich heritage of our land.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-brand-cream/20 rounded-full hover:bg-brand-cream hover:text-brand-ink transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-brand-cream/20 rounded-full hover:bg-brand-cream hover:text-brand-ink transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 border border-brand-cream/20 rounded-full hover:bg-brand-cream hover:text-brand-ink transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-widest">Collections</h3>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li><a href="#" className="hover:text-brand-cream transition-colors">Pashmina Shawls</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Embroidered Pherans</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Silk Kurtas</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Bridal Collection</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-widest">Customer Care</h3>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li><a href="#" className="hover:text-brand-cream transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-widest">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Artisan Hub, Lal Chowk, Srinagar, Jammu & Kashmir - 190001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>care@kashmirheritage.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-cream/40 uppercase tracking-widest">
            © 2026 Kashmir Heritage. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 opacity-40 grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4 opacity-40 grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-4 opacity-40 grayscale" />
          </div>
        </div>
      </div>
    </footer>
  );
}
