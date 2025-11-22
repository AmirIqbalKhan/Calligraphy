
import React from 'react';
import { motion } from 'framer-motion';
import { CollectionItem } from '../types';

const collections: CollectionItem[] = [
  { id: 1, category: "Bespoke Names", image: "https://calligraphermuneer.com/wp-content/uploads/2025/04/arabic-calligraphy.3.jpg" },
  { id: 2, category: "Wedding Suites", image: "https://thumbs.dreamstime.com/b/wedding-invitation-suite-calligraphy-autumn-details-close-up-wedding-invitation-suite-calligraphy-resting-406647982.jpg" },
  { id: 3, category: "Wall Art", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXqIMX7ECpoPYTL9BWviVNNIarQs3rICiWQ&s" },
];

const Gallery: React.FC = () => {
  return (
    <section id="collections" className="py-32 bg-white relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <h2 className="font-serif text-5xl text-brand-dark mb-4">The Collection</h2>
          <div className="w-24 h-1 bg-brand-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative group ${index % 2 === 1 ? 'md:translate-y-16' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Shadow Element */}
              <div className="absolute top-4 left-4 w-full h-full bg-brand-secondary/5 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              
              <div className="relative overflow-hidden bg-brand-bg shadow-lg cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                
                {/* Floating Label */}
                <div className="absolute bottom-8 left-0 bg-white py-3 px-6 shadow-lg border-l-4 border-brand-primary transition-all duration-300 group-hover:pl-8">
                  <span className="font-serif text-xl text-brand-dark italic">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;