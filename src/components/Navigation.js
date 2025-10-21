import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const items = ['Home', 'About Gyoji', "Raphael's Story", 'Principles', 'Practice'];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-purple-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-center space-x-4 md:space-x-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={`/${item.toLowerCase().replace(/\s+/g, '-').replace("'", '')}`}
              className="text-white hover:text-yellow-400 font-semibold text-lg transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-800"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;