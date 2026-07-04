import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const CountUp = ({ to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(to.replace(/,/g, ''));
      if (start === end) return;

      const incrementTime = (duration / end) * 1000;
      let timer = setInterval(() => {
        start += Math.ceil(end / (duration * 60)); // 60fps approx
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, to, duration]);

  // Format with commas
  const formattedCount = new Intl.NumberFormat('en-US').format(count);

  return (
    <span ref={ref}>
      {formattedCount}{suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { number: '10000', suffix: '+', label: 'Pelanggan Puas' },
    { number: '100', suffix: '%', label: 'Segar Setiap Hari' },
    { number: '12', suffix: '', label: 'Bahan Premium' },
    { number: '365', suffix: '', label: 'Dibuat Langsung Setiap Pagi' }
  ];

  return (
    <section id="proses" className="bg-[#1A1817] py-24 px-8 md:px-24 border-y border-ivory/10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-wheat">
                <CountUp to={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base tracking-widest uppercase opacity-80 max-w-[150px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Stats;
