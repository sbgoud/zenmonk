import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
          >
            Unlock Unbreakable Discipline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover the ancient Zen monk system of Gyoji that transforms your consistency and makes you unbreakable. Watch the inspiring video below.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-12"
          >
            <div className="bg-black p-4 rounded-lg shadow-2xl max-w-4xl mx-auto">
              <p className="text-lg mb-4">Video Summary: "There's a level of discipline that makes people look at you with fear..."</p>
              <div className="text-center">
                <span className="text-6xl">🎥</span>
                <p className="mt-2">Embedded video would go here. For demo, imagine the full transcript video.</p>
              </div>
            </div>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-4 px-10 rounded-full text-xl transition duration-300 shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-gray-900"></div>
    </div>
  );
};

export default Home;