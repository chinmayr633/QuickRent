import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">QuickRent</h3>
            <p className="text-green-200">
            Access the latest tech without the hefty price tag. From laptops to cameras, gaming consoles to drones - rent what you need, when you need it.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/AllGadgetsPage" className="text-green-200 hover:text-white">Gadets</Link></li>
              <li><Link to="/activities" className="text-green-200 hover:text-white">About Us</Link></li>
              <li><Link to="/gallery" className="text-green-200 hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-green-200">
              <li>QuickRent Office, Banglore </li>
              <li>Phone: +91 12345 67890</li>
              <li>Email: info@quickrent.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-green-200 hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-green-200 hover:text-white"><FaInstagram size={24} /></a>
              <a href="#" className="text-green-200 hover:text-white"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-4 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} QuickRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;