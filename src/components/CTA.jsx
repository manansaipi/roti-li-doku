import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#1A1817] text-cream overflow-hidden flex items-center justify-center">
      {/* Background glow and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brown/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 max-w-4xl"
        >
          Siap Merasakan <span className="text-wheat italic font-serif">Perbedaannya?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-beige max-w-xl mb-16 font-light opacity-80"
        >
          Pesan di muka roti artisan kami hari ini dan rasakan kehangatan kesempurnaan yang baru dipanggang.
        </motion.p>
        
        <motion.a 
          href="https://wa.me/6282292052791"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="group relative px-12 py-5 bg-wheat text-brown overflow-hidden rounded-full font-medium tracking-widest uppercase text-sm inline-block"
        >
          <div className="absolute inset-0 bg-ivory scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
          <span className="relative z-10 group-hover:text-brown transition-colors duration-500">
            Pesan Sekarang
          </span>
        </motion.a>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-wheat rounded-full opacity-20 pointer-events-none"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -50],
            x: [0, Math.random() * 20 - 10],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
};

export default CTA;
