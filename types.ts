export interface Product {
  id: string;
  name: string;
  category: 'Pashmina' | 'Pheran' | 'Kurta' | 'Suits';
  price: number;
  description: string;
  image: string;
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
