import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from '../images/contact.jpg';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image with overlay text */}
      <div className="relative mb-8">
        <img
          src={contactImage} // Use the imported image here
          alt="Contact Banner"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-2 border-lightblue-500 focus:border-lightblue-600 focus:ring-lightblue-600 px-4 py-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full rounded-md border-2 border-lightblue-500 focus:border-lightblue-600 focus:ring-lightblue-600 px-4 py-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-2 border-lightblue-500 focus:border-lightblue-600 focus:ring-lightblue-600 px-4 py-3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-3" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-3" />
                <span>info@quickrent.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-3" />
                <span>QuickRent Office, Main Road, Mysuru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
