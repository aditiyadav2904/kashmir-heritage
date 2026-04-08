import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hand-Embroidered Pashmina Shawl',
    category: 'Pashmina',
    price: 12500,
    description: 'Authentic 100% pure Pashmina shawl with intricate Sozni hand embroidery from the valley of Kashmir.',
    image: 'https://picsum.photos/seed/pashmina1/800/1000',
    colors: ['Cream', 'Royal Blue', 'Emerald Green']
  },
  {
    id: '2',
    name: 'Traditional Velvet Pheran',
    category: 'Pheran',
    price: 8500,
    description: 'Luxurious velvet Pheran with Tilla work, perfect for the winter season. A true Kashmiri heritage piece.',
    image: 'https://picsum.photos/seed/pheran1/800/1000',
    colors: ['Maroon', 'Black', 'Deep Purple']
  },
  {
    id: '3',
    name: 'Silk Aari Work Kurta',
    category: 'Kurta',
    price: 4500,
    description: 'Fine silk kurta featuring delicate Aari embroidery patterns inspired by Kashmiri flora.',
    image: 'https://picsum.photos/seed/kurta1/800/1000',
    colors: ['Saffron', 'White', 'Teal']
  },
  {
    id: '4',
    name: 'Embroidered Woolen Suit',
    category: 'Suits',
    price: 6800,
    description: 'Warm woolen suit set with full-body embroidery, designed for elegance and comfort.',
    image: 'https://picsum.photos/seed/suit1/800/1000',
    colors: ['Beige', 'Grey', 'Navy']
  },
  {
    id: '5',
    name: 'Kalamkari Pashmina Stole',
    category: 'Pashmina',
    price: 5500,
    description: 'Hand-painted Kalamkari designs on pure Pashmina wool, blending two ancient art forms.',
    image: 'https://picsum.photos/seed/stole1/800/1000',
    colors: ['Multi-color', 'Earth Tones']
  },
  {
    id: '6',
    name: 'Summer Cotton Pheran',
    category: 'Pheran',
    price: 3200,
    description: 'Lightweight cotton Pheran with minimal embroidery, ideal for a breezy summer day.',
    image: 'https://picsum.photos/seed/pheran2/800/1000',
    colors: ['Sky Blue', 'Peach', 'Mint']
  }
];

export const CATEGORIES = ['All', 'Pashmina', 'Pheran', 'Kurta', 'Suits'] as const;
