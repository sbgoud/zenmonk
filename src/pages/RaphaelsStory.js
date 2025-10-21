import React, { useState } from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { phase: 'The Awakening', description: 'Raphael struggles with habits, discovering the need for change.' },
  { phase: 'The Secret of the Monks', description: 'Learns about Gyoji and irreversible commitments.' },
  { phase: 'The Internal War', description: 'Faces resistance but persists with fixed schedules.' },
  { phase: 'The One Way', description: 'Adopts identical daily practice for automation.' },
  { phase: 'Practice Without Gap', description: 'Overcomes obstacles with continuity.' },
  { phase: 'Pre-Solutions', description: 'Prepares for challenges in advance.' },
  { phase: 'The Transformation', description: 'Becomes unbreakable, inspiring others.' },
];

const RaphaelsStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white relative">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500"
        >
          Raphael's Journey
        </motion.h1>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveIndex(index)}
                className={`w-1/2 p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ${activeIndex === index ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800'}`}
              >
                <h3 className="text-2xl font-semibold mb-2">{item.phase}</h3>
                <p className="text-lg">{item.description}</p>
              </motion.div>
              <div className="w-1/2 flex justify-center relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  className="w-8 h-8 bg-yellow-400 rounded-full z-10"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RaphaelsStory;