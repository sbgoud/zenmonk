import React from 'react';
import { motion } from 'framer-motion';

const AboutGyoji = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          What is Gyoji?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          <p className="mb-6">
            Gyoji is an ancient practice from Zen Buddhism, meaning "continuous practice without gaps."
            Originating in the 13th century at temples like Eiheiji, it emphasizes unwavering consistency
            in daily routines, transforming habits into an unbreakable identity.
          </p>
          <p className="mb-6">
            Unlike modern habit-tracking apps, Gyoji treats commitments as irreversible, making failure
            psychologically unbearable and turning discipline into a natural state of being.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Key Elements:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Public Declarations to lock in commitments</li>
              <li>Fixed Schedules to eliminate decision fatigue</li>
              <li>Identical Practice for seamless automation</li>
              <li>Pre-Solved Obstacles for uninterrupted flow</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutGyoji;