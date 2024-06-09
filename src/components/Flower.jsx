import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const flowerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 3, opacity: 1, transition: { duration: 1 } },
};

const flowerAnimation = {
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

const Flower = ({ size, delay, top, left, x, y, duration }) => {
  const [flowerColor, setFlowerColor] = useState(randomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowerColor(randomColor());
    }, 2000); // Change color every 2 seconds
    return () => clearInterval(interval);
  }, []);

  function randomColor() {
    const colors = ['#FFC0CB', '#FF69B4', '#FF1493', '#C71585', '#DA70D6']; // Add more colors if needed
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={flowerVariants}
      className="absolute"
      style={{ width: size, height: size, top, left }}
    >
      <motion.div
        custom={{ x, y, duration }}
        animate="animate"
        variants={flowerAnimation}
        transition={{ delay }}
        className="relative"
        style={{ width: '100%', height: '100%' }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: size / 2,
              height: size,
              backgroundColor: flowerColor, // Assigning the same color for all petals of the flower
              opacity: 0.5, // Adjust opacity for smooth fading effect
              transformOrigin: 'bottom center',
              transform: `rotate(${i * 72}deg)`,
              clipPath: 'ellipse(50% 100% at 50% 0%)',
              transition: { duration: 2 }, // Smooth transition for both color and opacity
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Flower;
