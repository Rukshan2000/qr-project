import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MessageBox = ({ onClick }) => {
  const [showPrompt, setShowPrompt] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    >
      {showPrompt ? (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-4 text-center bg-white rounded-lg shadow-lg md:p-8"
          style={{ maxWidth: '90%', margin: 'auto' }}
        >
          <p className="mb-2 text-2xl font-semibold text-red-600 md:text-3xl md:mb-4">🎉🎈🎂 Happy Birthday! 🎂🎈🎉</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="px-4 py-2 mb-2 text-base font-semibold text-white transition duration-300 bg-red-600 rounded-full shadow-md md:px-6 md:py-3 md:mr-4 md:mb-0 md:text-lg hover:bg-red-700"
          >
            🎁 Click me to surprise! 🎁
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-4 text-center bg-white rounded-lg shadow-lg md:p-8"
          style={{ maxWidth: '90%', margin: 'auto' }}
        >
          <p className="mb-2 text-2xl font-semibold text-red-600 md:text-3xl md:mb-4">🎉🎁🎈 Surprise! 🎈🎁🎉</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="px-4 py-2 text-base font-semibold text-white transition duration-300 bg-red-600 rounded-full shadow-md md:px-6 md:py-3 md:text-lg hover:bg-red-700"
          >
            🎊 Yesssss!!! Forever and always 🎊
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MessageBox;
