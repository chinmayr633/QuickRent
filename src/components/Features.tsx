import { Package, Clock, Truck, Shield } from 'lucide-react';

const features = [
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

export default function Features() {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose QuickRent?
          </p>
        </div>

        <div className="mt-24"> {/* Increased margin-top for a little more space */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="flex justify-center items-center h-20 w-20 rounded-full bg-indigo-500 text-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <feature.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <div className="px-6 py-8 mt-16 text-center">
                  <p className="text-xl font-semibold text-gray-900">{feature.name}</p>
                  <p className="mt-4 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
