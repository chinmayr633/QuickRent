import React, { useState } from 'react';

const allGadgets = [
  {
    id: '1',
    name: 'MacBook Pro M1',
    category: 'laptops',
    price: '₹2000/week',
    features: ['M1 Pro chip', '16GB RAM', '512GB SSD', 'Free Delivery', '24/7 Support'],
    image: macbookProImage,
    rating: 5,
    isNew: true
  },
  {
    id: '2',
    name: 'Sony A7 III',
    category: 'cameras',
    price: '₹500/week',
    features: ['Full Frame', '24MP', '4K Video', 'Free Memory Card', 'Damage Protection'],
    image: sonyA7Image,
    rating: 5,
    isNew: true
  },
  {
    id: '3',
    name: 'PS5 Console',
    category: 'gaming',
    price: '₹1000/week',
    features: ['Latest Games', 'Extra Controller', '4K Gaming', 'Free Games', '24/7 Support'],
    image: ps5Image,
    rating: 5,
    isNew: true
  },
  {
    id: '4',
    name: 'iPhone 13',
    category: 'mobiles',
    price: '₹900/week',
    features: ['Super Retina XDR', 'A15 Bionic chip', '5G', 'Free Delivery', '24/7 Support'],
    image: iphone13Image,
    rating: 5,
    isNew: false
  },
  {
    id: '5',
    name: 'Samsung Galaxy Tab S7',
    category: 'tablets',
    price: '₹1200/week',
    features: ['11" Display', 'Snapdragon 865+', '120Hz Refresh Rate', 'Free Delivery', 'S Pen Included'],
    image: samsungTabletImage,
    rating: 5,
    isNew: true
  },
  {
    id: '6',
    name: 'LG OLED TV',
    category: 'tv',
    price: '₹2500/week',
    features: ['4K OLED', 'HDR', 'Smart TV', 'Voice Control', 'Free Delivery'],
    image: lgTvImage,
    rating: 5,
    isNew: true
  },
  {
    id: '7',
    name: 'Smart Fridge',
    category: 'appliances',
    price: '₹1490/week',
    features: ['Wi-Fi Enabled', 'Touch Screen', 'Smart Alerts', 'Energy Efficient', 'Free Delivery'],
    image: smartFridgeImage,
    rating: 4,
    isNew: false
  },
];

const categories = ['all', 'mobiles', 'laptops', 'tablets', 'cameras', 'gaming', 'appliances'];

const AllGadgetsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGadgets = allGadgets.filter((gadget) => {
    const matchesSearch = gadget.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || gadget.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search Gadgets"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="categories">
          {categories.map((category) => (
            <button key={category} onClick={() => handleCategoryChange(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="gadget-grid">
        {filteredGadgets.map((gadget) => (
          <div className="gadget-card" key={gadget.id}>
            <img src={gadget.image} alt={gadget.name} />
            <h3>{gadget.name}</h3>
            <p>{gadget.price}</p>
            <ul>
              {gadget.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGadgetsPage;
