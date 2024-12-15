import React, { useState } from 'react';
import { Menu, X, Laptop } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SignUpModal from '../pages/SignUp'; // Import your SignUpModal component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = () => {
    setIsModalOpen(true); // Open Sign Up modal
    setIsOpen(false); // Close mobile menu if it's open
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close Sign Up modal
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Laptop className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">QuickRent</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/gadgets" className="text-gray-600 hover:text-indigo-600">Gadgets</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact Us</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600">About Us</Link>
            {/* Sign Up button directly placed outside the dropdown */}
            <button
              onClick={openModal} // Open Sign Up modal when clicked
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/gadgets" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Gadgets</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact Us</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About Us</Link>
            {/* Sign Up button removed from mobile dropdown */}
          </div>
        </div>
      )}
      {/* Render Sign Up Modal */}
      {isModalOpen && <SignUpModal closeModal={closeModal} />}
    </nav>
  );
}
