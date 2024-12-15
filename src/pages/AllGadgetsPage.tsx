import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { GadgetGrid } from '../components/GadgetGrid';  // Ensure this is imported
import { allGadgets } from '../data/allGadgets';  // Ensure your gadget data is imported
import { useLocation } from 'react-router-dom';

import bannerImage from '../images/Gadgets.jpg';

export default function AllGadgetsPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all', 'mobiles', 'laptops', 'tablets', 'cameras', 'gaming', 'appliances', 'tv'
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  const filteredGadgets = allGadgets.filter((gadget) => {
    const matchesSearch = gadget.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || gadget.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="px-1 sm:px-3 lg:px-5">
        <div className="relative mb-8 overflow-hidden rounded-3xl shadow-lg">
          <img src={bannerImage} alt="Gadgets Banner" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
            <h1 className="text-4xl font-bold">All Available Gadgets</h1>
            <p className="text-lg mt-2">Browse our complete collection of premium tech</p>
          </div>
        </div>
      </div>

      <Section title="" subtitle="" background="gray">
        <div className="max-w-7xl mx-auto mt-1 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gadgets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-indigo-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <GadgetGrid gadgets={filteredGadgets} />
        {filteredGadgets.length === 0 && <p>No gadgets found for this category.</p>}
      </Section>
    </div>
  );
}
