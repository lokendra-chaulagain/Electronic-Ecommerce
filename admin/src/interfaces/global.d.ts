export interface Size {
  id: number;
  name: string;
}


export interface Color {
  id: number;
  name: string;
}

export interface Category {
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
}

export interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
}
