import Hero from '../components/Hero';
import Features from '../components/Features';
import { ScrollingGadgets } from '../components/ScrollingGadgets';
import GadgetCategories from '../components/GadgetCategories';

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <GadgetCategories/>
      <Features />
      <div className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Gadgets</h2>
          <p className="mt-4 text-lg text-gray-600">Check out our latest additions</p>
        </div>
        <ScrollingGadgets />
      </div>
    </div>
  );
}