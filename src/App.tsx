import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './sections/Hero';
import ChinaSection from './sections/ChinaSection';
import SpainSection from './sections/SpainSection';
import GermanySection from './sections/GermanySection';
import RussiaSection from './sections/RussiaSection';
import Processus from './sections/Processus';
import Temoignages from './sections/Temoignages';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Configure GSAP defaults
    gsap.config({
      nullTargetWarn: false,
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-[#0A0A0A] min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main>
        <Hero />
        <div id="destinations">
          <ChinaSection />
          <SpainSection />
          <GermanySection />
          <RussiaSection />
        </div>
        <Processus />
        <Temoignages />
        <FAQ />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
