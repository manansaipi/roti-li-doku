import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const text = "Memanggang adalah seni yang membutuhkan kesabaran, ketelitian, dan gairah. Kami bangun sebelum matahari terbit untuk membuat roti yang menyatukan orang-orang.";
  
  const words = text.split(" ");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  return (
    <section id="cerita-kami" ref={containerRef} className="bg-[#1A1817] text-ivory py-32 px-8 md:px-24">
      <div className="container mx-auto flex items-center justify-center min-h-[50vh]">
      <div className="max-w-6xl mx-auto">
        <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-brown">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            const y = useTransform(scrollYProgress, [start, end], [10, 0]);
            
            return (
              <span key={i} className="inline-block mr-[0.25em]">
                <span className="inline-block overflow-hidden pb-2">
                  <motion.span style={{ opacity, y }} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              </span>
            );
          })}
        </p>
      </div>
      </div>
    </section>
  );
};

export default About;
