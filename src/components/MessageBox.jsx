import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MessageBox = ({ onClick }) => {
  const [showPrompt, setShowPrompt] = useState(true);

  const handleNoClick = () => {
    setShowPrompt(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
    >
      {showPrompt ? (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 md:p-8 rounded-lg shadow-lg text-center" // Added responsive padding
          style={{ maxWidth: '90%', margin: 'auto' }} // Centering the box and limiting its width
        >
          <p className="text-2xl md:text-3xl font-semibold text-red-600 mb-2 md:mb-4">💖 My love, do you feel the same? 💖</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="px-4 md:px-6 py-2 md:py-3 mr-2 md:mr-4 mb-2 md:mb-0 bg-red-600 text-white rounded-full font-semibold text-base md:text-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Yes, I Feel You 🥺💕
          </motion.button>
          <button
            onClick={handleNoClick}
            className="px-4 md:px-6 py-2 md:py-3 bg-gray-300 text-gray-700 rounded-full font-semibold text-base md:text-lg shadow-md hover:bg-gray-400 transition duration-300"
          >
            No, sorry 😔
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 md:p-8 rounded-lg shadow-lg text-center" // Added responsive padding
          style={{ maxWidth: '90%', margin: 'auto' }} // Centering the box and limiting its width
        >
          <p className="text-2xl md:text-3xl font-semibold text-red-600 mb-2 md:mb-4"> Yes, please! I beg of you! 🥺💕</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="px-4 md:px-6 py-2 md:py-3 bg-red-600 text-white rounded-full font-semibold text-base md:text-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Yesssss !!! Forever and always 🥺💕
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MessageBox;
