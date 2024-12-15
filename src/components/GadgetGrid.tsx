
import { Gadget } from '../types';
import { GadgetCard } from './GadgetCard';

interface GadgetGridProps {
  gadgets: Gadget[];
}

export function GadgetGrid({ gadgets }: GadgetGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {gadgets.map((gadget) => (
        <GadgetCard key={gadget.id} gadget={gadget} />
      ))}
    </div>
  );
}