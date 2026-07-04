import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loaded = 0;
    const totalFrames = 192;
    const frames = [];

    // Preload all frames
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        loaded++;
        setProgress(Math.round((loaded / totalFrames) * 100));
        if (loaded === totalFrames) {
          // Add a small delay to ensure smooth transition
          setTimeout(() => {
            onLoaded();
          }, 1000);
        }
      };
      // Important to push to array so they aren't garbage collected immediately
      frames.push(img);
    }
    
    // Store frames on window for easy access by canvas later to prevent redownload
    window.preloadedSequence = frames;
  }, [onLoaded]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream text-brown"
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-8"
          >
            Roti Li Doku
          </motion.div>
          
          <div className="w-64 h-[1px] bg-brown/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-brown"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm font-medium tracking-widest text-brown/60"
          >
            {progress}%
          </motion.div>
        </div>

        {/* Subtle decorative particles (simulating flour) */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
