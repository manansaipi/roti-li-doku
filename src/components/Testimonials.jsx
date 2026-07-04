import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "mmng dabesstt roti li dr. lina iniw 🫶🏼🤤 enak dng murcee lgi, lancar” ushanya dokter 🫶🏼",
      author: "@nebulann_",
      role: "TikTok Comment"
    },
    {
      quote: "pastinya enak 👌",
      author: "@mama.zaynka",
      role: "TikTok Comment"
    },
    {
      quote: "roti yg harga 2rb sja so enakkk aplgi yg harga mahall, roti kopi favoritttt😍😍",
      author: "@apriliaaib_",
      role: "TikTok Comment"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative h-screen bg-cream overflow-hidden flex items-center justify-center">
      {/* Decorative background typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <h2 className="text-[20vw] font-serif italic text-brown whitespace-nowrap translate-y-12">
          Testimoni
        </h2>
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <span className="text-6xl text-wheat mb-8 font-serif">"</span>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-brown leading-tight mb-12">
              {testimonials[current].quote}
            </h3>
            <div className="flex flex-col items-center">
              <p className="text-xl font-medium text-brown mb-2">{testimonials[current].author}</p>
              <p className="text-sm uppercase tracking-widest text-brown/60">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-12 z-20">
        <button onClick={prev} className="p-4 rounded-full border border-brown/20 text-brown hover:bg-brown hover:text-cream transition-colors duration-300">
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                current === i ? 'w-12 bg-brown' : 'w-2 bg-brown/20 hover:bg-brown/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button onClick={next} className="p-4 rounded-full border border-brown/20 text-brown hover:bg-brown hover:text-cream transition-colors duration-300">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
