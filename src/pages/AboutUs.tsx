import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaStar, FaBuilding } from 'react-icons/fa';
import aboutUsImage from '../images/Aboutus.jpg';  // Add your "About Us" image
import member1Image from '../images/1p.jpg';  // Image of the first team member
import member2Image from '../images/2p.jpg';  // Image of the second team member
import member3Image from '../images/3p.jpg';  // Image of the third team member

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* About Us Image Section */}
      <div className="relative mb-8">
        <img
          src={aboutUsImage} // Use the "About Us" image here
          alt="About Us"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* Introduction Section */}
        <section className="mb-8">
          <p className="text-gray-700">
            In today's fast-paced world, constantly moving jobs and locations makes it difficult for millennials to manage their furniture, appliances, and consumer durables. The hassle of moving, along with the risk of breakage or damage, makes it inconvenient and costly.

            With technology evolving rapidly, so are people's needs. Quickrent understands the desire for the latest products and technology, offering flexible rental solutions to ensure you always have access to the best, without the commitment of ownership.

            Quickrent is India's first marketplace dedicated to renting household appliances and consumer durables. We also empower businesses to rent out products, benefiting both customers and the environment.

            With over 14 years of experience in the electronics industry, and a committed network of business partners, Quickrent ensures you receive the right products, on time, every time.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src={member1Image} // Image of the first team member
                alt="Team Member 1"
                className="rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={member2Image} // Image of the second team member
                alt="Team Member 2"
                className="rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={member3Image} // Image of the third team member
                alt="Team Member 3"
                className="rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-500">Marketing Head</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaStar className="text-white text-4xl mr-6" />
              <div>
                <h3 className="text-xl font-semibold text-white">Quality</h3>
                <p className="text-white">We ensure the highest standards of quality in everything we do.</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaUsers className="text-white text-4xl mr-6" />
              <div>
                <h3 className="text-xl font-semibold text-white">Collaboration</h3>
                <p className="text-white">We work together to achieve common goals and foster teamwork.</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaBuilding className="text-white text-4xl mr-6" />
              <div>
                <h3 className="text-xl font-semibold text-white">Innovation</h3>
                <p className="text-white">We embrace new ideas to drive innovation and progress.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="text-center">
          {/* Footer content can go here */}
        </section>
      </motion.div>
    </div>
  );
};

export default AboutUs;
