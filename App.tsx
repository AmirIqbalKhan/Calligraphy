import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Gallery from './components/Gallery';
import Artist from './components/Artist';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen antialiased selection:bg-brand-primary/30 selection:text-brand-dark">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <Gallery />
      <Artist />
      <Testimonials />
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;