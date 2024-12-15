import { Feature } from '../types';
import { Package, Clock, Truck, Shield } from 'lucide-react';

export const features: Feature[] = [
  {
    name: 'Wide Variety of Gadgets',
    description: 'Choose from our extensive collection of premium gadgets, from the latest MacBooks to professional cameras.',
    icon: Package,
  },
  {
    name: 'Quick Delivery',
    description: 'Get your rented gadgets delivered to your doorstep within 24 hours of confirmation.',
    icon: Truck,
  },
  {
    name: 'Flexible Duration',
    description: 'Rent for a day, week, or month. Extend or return early based on your needs.',
    icon: Clock,
  },
  {
    name: 'Damage Protection',
    description: 'All rentals come with comprehensive damage protection for peace of mind.',
    icon: Shield,
  },
];