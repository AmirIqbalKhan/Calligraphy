import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: 1, text: "A masterpiece that transformed our living space. The serenity it brings is palpable.", author: "Eleanor V.", role: "Interior Designer" },
  { id: 2, text: "Captured the essence of our names beautifully. Simply timeless.", author: "Sarah & James", role: "Wedding Couple" },
  { id: 3, text: "The most thoughtful gift I have ever received. The packaging was art itself.", author: "Michael T.", role: "Art Collector" },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-brand-bg relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <img 
            src="https://plus.unsplash.com/premium_photo-1675695700239-44153e6bf430?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXIlMjB0ZXh0dXJlfGVufDB8fDB8fHww" 
            alt="Paper texture" 
            className="w-full h-full object-cover"
          />
      </div>

      <div className="text-center mb-12 relative z-10">
          <h2 className="font-serif text-3xl text-brand-dark">Kind Words</h2>
      </div>

      <div className="relative w-full max-w-4xl h-[300px] flex items-center justify-center perspective-1000">
        <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, rotateX: -90, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 90, y: -50 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
              className="absolute bg-white p-12 shadow-2xl border-t-4 border-brand-primary max-w-2xl mx-6"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-secondary text-white flex items-center justify-center rounded-full font-serif text-2xl">
                  "
              </div>
              
              <p className="font-serif italic text-2xl text-brand-dark leading-relaxed text-center mb-8">
                {testimonials[current].text}
              </p>
              
              <div className="text-center border-t border-brand-bg pt-6">
                <div className="font-sans font-bold text-sm tracking-widest uppercase text-brand-secondary">
                  {testimonials[current].author}
                </div>
                <div className="font-sans text-xs text-brand-primary mt-1">
                  {testimonials[current].role}
                </div>
              </div>
            </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex space-x-3 mt-8 z-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? 'bg-brand-secondary w-8 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-brand-primary'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;