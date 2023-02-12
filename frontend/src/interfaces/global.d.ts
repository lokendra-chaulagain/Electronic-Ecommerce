export interface Size {
  id: number;
  name: string;
}

export interface Color {
  id: number;
  name: string;
}

export interface Category {
  [x: string]: any;
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Contact {
  id: number;
  fullName: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
  status: boolean;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  category: number;
  isFeatured: boolean;
  isTopSelling: boolean;
  createdAt: Date;
  updatedAt: Date;
}
