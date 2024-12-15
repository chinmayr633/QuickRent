export interface Gadget {
  id: string;
  name: string;
  category: string;
  price: string;
  features: string[];
  image: string;
  rating: number;
  isNew?: boolean;
}

export interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FormField {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}