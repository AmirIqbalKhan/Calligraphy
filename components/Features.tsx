import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Sacred Rhythm", desc: "Every stroke follows a breath-like cadence." },
  { title: "Artisan Materials", desc: "Hand-ground inks & Japanese papers." },
  { title: "Historic Soul", desc: "Rooted in centuries of tradition." },
  { title: "Modern Vision", desc: "Minimalist aesthetics for today." }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-secondary text-brand-bg relative overflow-hidden">
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
           className="relative perspective-1000"
           initial={{ opacity: 0, rotateY: -30 }}
           whileInView={{ opacity: 1, rotateY: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
        >
           <div className="relative z-10 rounded-lg overflow-hidden border-8 border-white/5 shadow-2xl">
             <img 
               src="https://thumbs.dreamstime.com/b/highresolution-seven-horses-wall-art-majestic-galloping-steeds-illustrated-vibrant-poster-ideal-decoration-captivating-376631488.jpg" 
               alt="Ink Process" 
               className="w-full h-auto object-cover"
             />
           </div>
           {/* Back element for depth */}
           <div className="absolute -bottom-10 -left-10 w-full h-full border border-brand-primary/30 z-0 hidden md:block"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-primary font-sans text-xs tracking-[0.2em] uppercase">The Philosophy</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-12 mt-4">Crafted with <span className="italic text-brand-primary">Intent</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-brand-primary/50 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-2 h-2 bg-brand-primary mb-4 rounded-full shadow-[0_0_10px_#C6A87C]"></div>
                <h4 className="font-serif text-xl text-white mb-2">{feature.title}</h4>
                <p className="font-sans font-light text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;