import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4"
        >
          Post Office
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-500 mb-4"
        >
          &copy; {new Date().getFullYear()} All rights reserved
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4"
        >
          <a href="#" className="text-gray-500 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            Contact
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;