import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cakeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 3, opacity: 1, transition: { duration: 1 } },
};

const floatingAnimation = {
  animate: (custom) => ({
    x: [0, custom.x, 0], // Float left and right
    y: [0, custom.y, 0], // Float up and down
    rotate: [0, 360], // Rotate continuously
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      ease: "linear",
    },
  }),
};

const candleAnimation = {
  animate: {
    y: [0, -10, 0], // Float up and down
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Cake = ({ size, delay, top, left, x, y, duration }) => {
  const [cakeColor, setCakeColor] = useState(randomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setCakeColor(randomColor());
    }, 2000); // Change color every 2 seconds
    return () => clearInterval(interval);
  }, []);

  function randomColor() {
    const colors = ['#FFD700', '#FF6347', '#ADFF2F', '#20B2AA', '#87CEFA']; // Cake colors
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cakeVariants}
      className="absolute"
      style={{ width: size, height: size, top, left }}
    >
      <motion.div
        custom={{ x, y, duration }}
        animate="animate"
        variants={floatingAnimation}
        transition={{ delay }}
        className="relative"
        style={{ width: '100%', height: '100%' }}
      >
        <div
          className="absolute"
          style={{
            width: size,
            height: size / 2,
            backgroundColor: cakeColor,
            borderRadius: '50% 50% 0 0',
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate="animate"
              variants={candleAnimation}
              className="absolute"
              style={{
                width: size / 10,
                height: size / 2,
                backgroundColor: '#FFD700', // Candle color
                top: -size / 2,
                left: (i + 1) * (size / 6) - size / 12,
                borderRadius: '50%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '20%',
                  backgroundColor: '#FF4500', // Flame color
                  borderRadius: '50% 50% 0 0',
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cake;
