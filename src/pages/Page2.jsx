import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bahara from '../audio/Sunshine.mp3';
import Flower from '../components/Flower';
import MessageBox from '../components/MessageBox';
import photo from '../images/Samo.jpeg'; // Make sure to import your image

const LoveLetter = () => {
    const [flowers, setFlowers] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const [textVisible, setTextVisible] = useState(0);
    const [textCompleted, setTextCompleted] = useState(false);
    const [showFullText, setShowFullText] = useState(false);
    const [zoom, setZoom] = useState(0.5); // Start zoom from 0.5

    const zoomTransitionDuration = 5; // Duration for the zoom transition in seconds

    const fullText = `In your eyes, I found a universe where I could get lost forever. Your laughter is the melody of my heart,
     and your touch, the warmth that ignites my soul.Every moment with you is a treasure,
      a glimpse into a world where love knows no bounds. I cherish our time together, and 
      I am grateful for the love you shower upon me.With you, I've discovered the true meaning
       of devotion, of sacrifice, of selflessness. You've changed my life in ways I never thought possible.
       My love for you knows no limits, and I promise to stand by your side through every moment of our
        journey together.`;

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
        const typingSpeed = 50; // Adjust this value to change the typing speed (milliseconds)

        const interval = setInterval(() => {
            setTextVisible((prev) => {
                if (prev < fullText.length) {
                    return prev + 1;
                } else {
                    setTextCompleted(true);
                    clearInterval(interval);
                    setShowFullText(true);
                    setTimeout(() => setShowFullText(false), 4000); // Hide text after 3 seconds
                    setTimeout(() => setZoom(1.0), 4000); // Start zooming image after 3 seconds
                    return prev;
                }
            });
        }, typingSpeed);
        return () => clearInterval(interval);
    }, []);

    const handleYesClick = () => {
        const audio = new Audio(bahara);
        audio.play();
        setShowContent(true);
        setZoom(0.5); // Ensure the initial zoom is set to 0.5 when content shows
    };

    return (
        <motion.div
            initial={{ opacity: 0, background: "linear-gradient(to right, #F48FB1, #ffffff)" }}
            animate={{ opacity: 1, background: "linear-gradient(to right, #ffffff, #F48FB1)" }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center justify-center min-h-screen overflow-hidden"
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
                    <div className="relative z-10 max-w-lg p-4 bg-white rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(20px)' }}>
                        {!textCompleted ? (
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="relative z-10"
                            >
                                <h1 className="mb-2 text-3xl text-purple-700 sm:text-4xl font-cursive sm:mb-4">My Love Samodhi,</h1>
                                <motion.p
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="mb-4 text-sm text-gray-800 sm:text-lg sm:mb-6"
                                >
                                    {fullText.slice(0, textVisible)}
                                </motion.p>
                                <motion.p
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 1 }}
                                    className="mb-4 text-sm text-gray-800 sm:text-lg sm:mb-6"
                                >
                                    Forever enchanted,
                                </motion.p>
                                <motion.p
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 2, duration: 1 }}
                                    className="text-sm text-purple-700 sm:text-lg font-cursive"
                                >
                                    Rukshan....
                                </motion.p>
                            </motion.div>
                        ) : (
                            <>
                                {showFullText && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        className="relative z-10"
                                    >
                                        <h1 className="mb-2 text-3xl text-purple-700 sm:text-4xl font-cursive sm:mb-4">My dearest Jack,</h1>
                                        <p className="mb-4 text-sm text-gray-800 sm:text-lg sm:mb-6">
                                            {fullText}
                                        </p>
                                        <p className="mb-4 text-sm text-gray-800 sm:text-lg sm:mb-6">
                                            Forever enchanted,
                                        </p>
                                        <p className="text-sm text-purple-700 sm:text-lg font-cursive">
                                            Rose....
                                        </p>
                                    </motion.div>
                                )}
                                {!showFullText && (
                                    <motion.div
                                        initial={{ scale: 0.5 }} // Initial scale set to 0.5
                                        animate={{ scale: zoom }}
                                        transition={{ duration: zoomTransitionDuration, ease: "easeInOut" }}
                                        className="relative z-10"
                                    >
                                        <img
                                            src={photo}
                                            alt="Photo"
                                            className="w-full h-auto rounded-lg shadow-lg"
                                        />
                                    </motion.div>
                                )}
                            </>
                        )}
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default LoveLetter;
