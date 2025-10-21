import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Practice = () => {
  const [declaration, setDeclaration] = useState('');
  const [schedule, setSchedule] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Practice Gyoji
        </motion.h1>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Make Your Public Declaration</h2>
            <textarea
              value={declaration}
              onChange={(e) => setDeclaration(e.target.value)}
              placeholder="I am a person who [your habit] every day at [time] for [duration]."
              className="w-full p-3 rounded bg-gray-700 text-white mb-4"
              rows="4"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Declare Publicly
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Set Your Fixed Schedule</h2>
            <input
              type="time"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              className="p-3 rounded bg-gray-700 text-white mb-4"
            />
            <p className="text-lg">Commit to the same time every day to build unbreakable habits.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Practice;