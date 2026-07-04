import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 400vh is the hero sequence height. The video scroll finishes at around 300vh-350vh.
      setScrolled(window.scrollY > window.innerHeight * 3.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Cerita Kami', 'Roti Kami', 'Proses', 'Kontak'];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 flex justify-between items-center px-8 md:px-16 py-6 ${scrolled ? 'bg-cream/80 backdrop-blur-md py-4' : 'bg-transparent text-ivory'}`}>
        <div className="text-2xl font-light tracking-widest uppercase relative z-50 mix-blend-difference text-white">
          Roti Li Doku
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 mix-blend-difference text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-brown text-cream flex flex-col justify-center px-8 md:px-24"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full">
              <ul className="flex flex-col gap-6 md:gap-8">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} target="_self" onClick={() => setIsOpen(false)} className="text-5xl md:text-8xl font-light tracking-tight hover:text-wheat transition-colors duration-300 relative group inline-block">
                      {item}
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-wheat transition-all duration-500 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-16 md:mt-0 flex flex-col gap-4 text-beige/60"
              >
                <p className="text-lg mb-4">
                  <a href="https://maps.app.goo.gl/zyGiaK3y625bnrT48" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                    Kunjungi Toko Roti Kami
                  </a>
                </p>
                <p className="leading-relaxed">Jl. Selayar No.188, Dulalowo,<br/>Kec. Kota Tengah, Kota Gorontalo,<br/>Gorontalo 96138</p>
                <div className="flex gap-6 mt-6">
                  <a href="https://www.instagram.com/roti.lidoku/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Instagram</a>
                  <a href="https://wa.me/6282292052791" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">WhatsApp</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
