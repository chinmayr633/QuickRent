import { Check } from 'lucide-react';
import { Gadget } from '../types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface GadgetCardProps {
  gadget: Gadget;
}

export function GadgetCard({ gadget }: GadgetCardProps) {
  return (
    <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Card.Header>
        <img
          src={gadget.image}
          alt={gadget.name}
          className="w-full h-48 object-cover rounded-lg mb-4 transform transition-all duration-300 hover:scale-110"
        />
        <h2 className="text-2xl font-semibold text-gray-900">{gadget.name}</h2>
        <p className="mt-4 text-xl text-gray-600">{gadget.price}</p>
        <ul className="mt-6 space-y-4">
          {gadget.features.map((feature) => (
            <li key={feature} className="flex">
              <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
              <span className="ml-3 text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </Card.Header>
      <Card.Footer>
        <Button className="transition-colors duration-300 hover:bg-indigo-600" fullWidth>
          Rent Now
        </Button>
      </Card.Footer>
    </Card>
  );
}
