import { type ReactNode } from 'react';

export interface DemoPage {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: ReactNode;
  accentColor: string;
  accentHover: string;
  bgGradient: string;
  image: string;
}

export interface MenuCategory {
  name: string;
  items: { name: string; description: string; price: string }[];
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  duration: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
}
