import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import SequenceScroll from './components/SequenceScroll';
import About from './components/About';
import BentoGallery from './components/BentoGallery';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Don't scroll until loading is complete
    if (!isLoaded) {
      lenis.stop();
    } else {
      lenis.start();
      window.scrollTo(0, 0); // Start at top when loaded
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}
      
      {/* Hide overflow if not loaded to prevent accidental scrolling */}
      <div className={`relative ${!isLoaded ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        
        {/* Scrollytelling Canvas Hero */}
        <SequenceScroll />

        {/* Following Content */}
        <div className="-mt-[100vh] relative z-10 pt-[100vh]">
          <About />
          <BentoGallery />
          <Stats />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
