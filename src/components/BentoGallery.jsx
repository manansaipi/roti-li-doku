import React from 'react';
import { motion } from 'framer-motion';

const BentoGallery = () => {
  const images = [
    { src: '/Assets/MANY ITEMS.png', title: 'Pilihan Roti', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
    { src: '/Assets/item-withlogo.jpeg', title: 'Bahan Segar', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { src: '/Assets/withlogo.jpeg', title: 'Seni Memanggang', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { src: '/Assets/download (1).png', title: 'Suasana Toko Roti', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { src: '/Assets/download (2).png', title: 'Sentuhan Ahli', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { src: '/Assets/download (3).png', title: 'Kemasan Premium', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { src: '/Assets/download (4).png', title: 'Rasa Otentik', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { src: '/Assets/download (5).png', title: 'Tradisi Kami', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
  ];

  return (
    <section id="roti-kami" className="py-24 px-4 md:px-12 lg:px-24 bg-beige text-brown">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-light tracking-tight max-w-2xl">
          Seni <br />
          <span className="italic font-serif">Pembuatan Roti</span>
        </h2>
        <p className="max-w-md text-lg mt-6 md:mt-0 opacity-80">
          Jelajahi ritual harian kami, dari memilih biji-bijian terbaik hingga menyajikan kulit roti yang sempurna ke meja Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4 md:gap-6 h-[200vh] md:h-[1000px]">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl ${img.colSpan} ${img.rowSpan} cursor-none bg-brown/10`}
          >
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-ivory text-2xl font-light">{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGallery;
