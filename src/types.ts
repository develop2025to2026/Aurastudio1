export interface BusinessProfile {
  name: string;
  tagline: string;
  category: string;
  targetAudience: string;
  description: string;
  location: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  address: string;
  city: string;
  country: string;
  openingHours: string;
}

export interface ColorTheme {
  id: string;
  name: string;
  primary: string;
  primaryHover: string;
  secondary: string;
  background: string;
  surface: string;
  surfaceElevated: string;
  accent: string;
  border: string;
  textMain: string;
  textMuted: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
  startingPrice: string;
  iconName: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residences' | 'Commercial' | 'Hospitality' | 'Interior';
  location: string;
  year: string;
  image: string;
  description: string;
  client: string;
  squareFeet: string;
  highlights: string[];
  gallery: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  priceUsd: number;
  priceLkr: number;
  period: string;
  description: string;
  idealFor: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  projectType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  shortDesc: string;
  deliverables: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}
