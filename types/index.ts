import { ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
}

export interface AppContextType {
  products: Product[];
  categories: Category[];
  cart: CartItem[];
  user: User | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  setUser: (user: User) => void;
}

export interface PropsWithChildren {
  children: ReactNode;
}

export default {}; // Default export for module compatibility