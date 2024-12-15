import { useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaLaptop, FaTabletAlt,FaCamera, FaPlaystation, FaBlender, FaTv, FaAppleAlt } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

export default function GadgetCategories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/gadgets?category=${category}`);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Explore Gadget Categories
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Mobile Category */}
          <motion.div
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleCategoryClick('mobiles')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaMobileAlt size={60} className="text-indigo-600" />
            <span className="mt-2 text-xl text-gray-700">Mobiles</span>
          </motion.div>

          {/* Laptop Category */}
          <motion.div
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleCategoryClick('laptops')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaLaptop size={60} className="text-indigo-600" />
            <span className="mt-2 text-xl text-gray-700">Laptops</span>
          </motion.div>

          {/* Tablet Category */}
          <motion.div
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleCategoryClick('tablets')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaTabletAlt size={60} className="text-indigo-600" />
            <span className="mt-2 text-xl text-gray-700">Tablets</span>
          </motion.div>

          {/* Camera Category */}
          <motion.div
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleCategoryClick('cameras')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCamera size={60} className="text-indigo-600" />
            <span className="mt-2 text-xl text-gray-700">Cameras</span>
          </motion.div>

          {/* Gaming Category */}
          <motion.div
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleCategoryClick('gaming')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaPlaystation size={60} className="text-indigo-600" />
            <span className="mt-2 text-xl text-gray-700">Gaming</span>
          </motion.div>

          {/* Smartwatch Category */}
          <motion.div
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleCategoryClick('smartwatches')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaAppleAlt size={60} className="text-indigo-600" />
            <span className="mt-2 text-xl text-gray-700">Smartwatches</span>
          </motion.div>

          {/* Appliances Category */}
          <motion.div
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleCategoryClick('appliances')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaBlender size={60} className="text-indigo-600" />
            <span className="mt-2 text-xl text-gray-700">Appliances</span>
          </motion.div>

          {/* TV Category */}
          <motion.div
            className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => handleCategoryClick('tv')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaTv size={60} className="text-indigo-600" />
            <span className="mt-2 text-xl text-gray-700">TVs</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
