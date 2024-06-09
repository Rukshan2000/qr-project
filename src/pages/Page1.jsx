import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bahara from '../audio/Sunshine.mp3';
import Flower from '../components/Flower';
import MessageBox from '../components/MessageBox';

const LoveLetter = () => {
    const [flowers, setFlowers] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [textVisible, setTextVisible] = useState(0);

    useEffect(() => {
        const generateFlowers = () => {
            const newFlowers = Array.from({ length: 10 }).map(() => ({
                size: Math.random() * 30 + 10,
                delay: Math.random() * 5,
                top: `${Math.random() * 80}vh`,
                left: `${Math.random() * 80}vw`,
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: Math.random() * window.innerHeight - window.innerHeight / 2,
                duration: Math.random() * 10 + 5,
            }));
            setFlowers(newFlowers);
        };
        generateFlowers();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextVisible((prev) => prev + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const handleYesClick = () => {
        const audio = new Audio(bahara);
        audio.play();
        setShowContent(true);
    };

    return (
        <motion.div
        initial={{ opacity: 0, background: "linear-gradient(to right, #F48FB1, #ffffff)" }}
        animate={{ opacity: 1, background: "linear-gradient(to right, #ffffff, #F48FB1)" }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center min-h-screen relative overflow-hidden"
      >
            {!showContent && <MessageBox onClick={handleYesClick} />}
            {showContent && (
                <>
                    {flowers.map((flower, index) => (
                        <Flower
                            key={index}
                            size={flower.size}
                            delay={flower.delay}
                            top={flower.top}
                            left={flower.left}
                            x={flower.x}
                            y={flower.y}
                            duration={flower.duration}
                        />
                    ))}
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg relative z-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(20px)' }}>
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="relative z-10"
                        >
                            <h1 className="text-3xl sm:text-4xl font-cursive text-purple-700 mb-2 sm:mb-4">My dearest Jack,</h1>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="text-sm sm:text-lg text-gray-800 mb-4 sm:mb-6"
                            >
                                {`As I sit here, the memories of our time together flood my mind like a cascade of emotions. Each moment we shared feels like a cherished gem, illuminating the path of my life with your love.
Your presence in my world is like a beacon, guiding me through the storms of existence. In your eyes, I find solace, and in your embrace, I discover the warmth of home.
Every heartbeat echoes your name, every breath whispers your essence. You are the melody that plays in the depths of my soul, the symphony that orchestrates my every thought and feeling.
With you, I have discovered a love that transcends time and space, a love that is as boundless as the ocean that stretches before us. In your arms, I find refuge from the chaos of the world, and in your love, I find the courage to face whatever lies ahead.`.slice(0, textVisible)}
                            </motion.p>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                className="text-sm sm:text-lg text-gray-800 mb-4 sm:mb-6"
                            >
                                Forever enchanted,
                            </motion.p>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 2, duration: 1 }}
                                className="text-sm sm:text-lg font-cursive text-purple-700"
                            >
                                [Rose]
                            </motion.p>
                        </motion.div>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default LoveLetter;
