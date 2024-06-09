import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const loremIpsum =
    "Welcome to our cozy corner of the web! Here, you can let your heart do the talking. Whether you're typing out sweet nothings or crafting a birthday surprise, this is the place to be creative and cute. So, dive in, and let your love shine bright!";
  const typingSpeed = 20; // milliseconds per character

  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex <= loremIpsum.length) {
        setDisplayText(loremIpsum.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      style={{
        background:
          'linear-gradient(to bottom, #3f72af, #1e3c72)',
        backgroundSize: '100% 200%',
        animation: 'animateBackground 20s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes animateBackground {
            0% {
              background-position-y: 0%;
            }
            100% {
              background-position-y: 100%;
            }
          }

          @keyframes mistyWaves {
            0% {
              transform: translateY(-20px) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-10px) rotateZ(5deg);
              opacity: 0.6;
            }
            100% {
              transform: translateY(-20px) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          body {
            overflow-x: hidden;
          }

          .misty-waves {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(circle, #FFFFFF 5%, rgba(255, 255, 255, 0) 70%);
            animation: mistyWaves 5s ease-in-out infinite;
            z-index: 0;
          }
        `}
      </style>
      <div className="misty-waves"></div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
        className="relative z-10 mb-8 text-5xl font-bold text-center text-white"
        style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
      >
        Let Your Heart Speak in the Language of Love
      </motion.h1>
      <p
        className="max-w-xs mb-8 text-center text-white"
        style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
      >
        {displayText}
      </p>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B94779054385&text=i+want+know+more+about+this&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
          className="relative z-10 px-8 py-4 mb-4 text-lg font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-pink-500 to-blue-400 hover:tw-pulse"
        >
          Start Expressing
        </motion.button>
      </a>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
        className="relative z-10 px-8 py-4 text-lg font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-blue-500 to-pink-400 hover:tw-pulse"
        onClick={() => {
          window.location.href = '/page1';
        }}
      >
        View Demo
      </motion.button>
    </motion.div>
  );
}

export default Home;
