import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const SequenceScroll = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Track scroll progress within this h-[400vh] container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate current frame (1 to 192)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 192]);

  // Handle canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Use motion value subscription to update canvas highly efficiently
    const renderFrame = (index) => {
      const idx = Math.max(0, Math.min(191, Math.round(index) - 1));
      
      // Use the preloaded frames from LoadingScreen
      if (window.preloadedSequence && window.preloadedSequence[idx]) {
        const img = window.preloadedSequence[idx];
        if (!img.complete) return;
        
        // Clear canvas
        ctx.fillStyle = '#1A1817'; // Fallback color, will be overriden by image
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Calculate cover behavior (like object-fit: cover)
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Set canvas dimensions to match window initially
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(frameIndex.get());
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const unsubscribe = frameIndex.on("change", renderFrame);
    
    // Initial render
    renderFrame(1);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      unsubscribe();
    };
  }, [frameIndex]);

  // Typography animations
  const opacity0 = useTransform(scrollYProgress, [0, 0.15, 0.25, 1], [1, 1, 0, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.25, 1], [0, -50, -50]);

  const opacity30 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.45, 0.55, 1], [0, 0, 1, 1, 0, 0]);
  const y30 = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [50, 50, 0, 0]);

  const opacity60 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.75, 0.85, 1], [0, 0, 1, 1, 0, 0]);
  const y60 = useTransform(scrollYProgress, [0, 0.5, 0.6, 1], [50, 50, 0, 0]);

  const opacity90 = useTransform(scrollYProgress, [0, 0.8, 0.9, 1], [0, 0, 1, 1]);
  const y90 = useTransform(scrollYProgress, [0, 0.8, 0.9, 1], [50, 50, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[#1A1817]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* The sequence canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Vignette overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* 0% Scroll Text */}
        <motion.div 
          style={{ opacity: opacity0, y: y0 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-ivory mb-6 tracking-tight">
            Dipanggang Segar Setiap Hari
          </h1>
          <p className="text-lg md:text-xl text-beige max-w-2xl font-light">
            Dibuat dengan penuh semangat menggunakan bahan-bahan pilihan.
          </p>
        </motion.div>

        {/* 30% Scroll Text */}
        <motion.div 
          style={{ opacity: opacity30, y: y30 }}
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-24"
        >
          <h2 className="text-6xl md:text-8xl font-light text-ivory leading-tight">
            Lembut.<br />
            Segar.<br />
            Untuk Berbagi.
          </h2>
        </motion.div>

        {/* 60% Scroll Text */}
        <motion.div 
          style={{ opacity: opacity60, y: y60 }}
          className="absolute inset-0 flex flex-col justify-center items-end text-right px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-light text-ivory leading-tight max-w-3xl">
            Dari tepung premium<br />
            <span className="text-wheat">hingga kulit keemasan yang sempurna.</span><br />
            Setiap roti memiliki cerita.
          </h2>
        </motion.div>

        {/* 90% Scroll Text */}
        <motion.div 
          style={{ opacity: opacity90, y: y90 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
        >
          <h2 className="text-6xl md:text-8xl font-light text-ivory mb-12">
            Rasakan Kesegarannya
          </h2>
          <a href="https://maps.app.goo.gl/zyGiaK3y625bnrT48" target="_blank" rel="noopener noreferrer" className="pointer-events-auto group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-ivory/30 hover:border-ivory transition-colors duration-500 inline-block">
            <div className="absolute inset-0 bg-ivory translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 text-ivory group-hover:text-brown transition-colors duration-500 uppercase tracking-widest text-sm font-medium">
              Jelajahi Roti Kami
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SequenceScroll;
