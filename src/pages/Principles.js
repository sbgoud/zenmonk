import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Public Declaration',
    description: 'Make your commitments public to turn them into irreversible actions. Share your goals to make failure a survival threat.',
    icon: '📢',
  },
  {
    title: 'Fixed Schedule',
    description: 'Choose non-negotiable hours to eliminate decision fatigue. Consistency beats perfection.',
    icon: '⏰',
  },
  {
    title: 'Identical Practice',
    description: 'Repeat the same routine daily until it becomes automatic. Variety is the enemy of consistency.',
    icon: '🔄',
  },
  {
    title: 'Pre-Solved Obstacles',
    description: 'Anticipate challenges and plan responses in advance. No thinking required during chaos.',
    icon: '🛡️',
  },
];

const Principles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          The 4 Principles of Gyoji
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-6xl mb-4">{principle.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{principle.title}</h3>
              <p className="text-lg">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principles;