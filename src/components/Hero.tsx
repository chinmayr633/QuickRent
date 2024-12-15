import { useNavigate } from 'react-router-dom'; // Import React Router
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Assuming the images are located in the 'assets' folder or similar
import g1 from '../images/g1.jpg'; // Update with actual path

export default function Hero() {
  const navigate = useNavigate(); // Initialize navigation
  const [currentImage, setCurrentImage] = useState(0); // Manage which image to display
  const [direction, setDirection] = useState('right'); // Direction of transition (left to right)

  const images = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
    g1
  ]; // Use the imported images

  // Change the image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => (prev === 'right' ? 'left' : 'right')); // Toggle the transition direction
      setCurrentImage(prev => (prev + 1) % images.length); // Cycle between images
    }, 4000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div className="relative bg-black overflow-hidden h-[90vh]">
      {/* Background Images with Motion Transition */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.4)', // Keep the image darkened all the time
        }}
        initial={{ x: direction === 'right' ? '100%' : '-100%' }} // Start image off-screen to the right or left
        animate={{ x: '0%' }} // Move the image to the center
        exit={{ x: direction === 'right' ? '-100%' : '100%' }} // Move the image off to the left or right
        transition={{ duration: 2, ease: 'easeInOut' }} // Smooth transition time with ease-in-out
      />

      {/* Content over the images */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-center lg:text-left text-white -mt-8 sm:-mt-10 lg:-mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Rent Premium Gadgets</span>
              <span className="block text-indigo-600">Without Breaking the Bank</span>
            </h1>
            <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Access the latest tech without the hefty price tag. From laptops to cameras, gaming consoles to drones - rent what you need, when you need it.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button
                  onClick={() => navigate('/gadgets')} // Navigate to the Gadgets page
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  aria-label="Explore available gadgets for rent"
                >
                  Explore Rentals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
