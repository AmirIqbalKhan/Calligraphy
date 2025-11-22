import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Artist: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="artist" className="py-32 relative bg-brand-bg overflow-hidden">
       {/* Background typography */}
       <div className="absolute top-20 right-0 font-script text-[15rem] text-brand-dark/5 pointer-events-none select-none leading-none z-0">
         Maryum
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Image Composition */}
            <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
                <motion.div 
                  className="relative w-[350px] h-[450px]"
                  style={{ y }}
                >
                    {/* Background rectangle */}
                    <div className="absolute top-8 left-8 w-full h-full bg-brand-secondary z-0"></div>
                    
                    {/* Image */}
                    <motion.div 
                        className="absolute inset-0 z-10 overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop" 
                            alt="Maryum" 
                            className="w-full h-full object-cover grayscale-[20%]"
                        />
                    </motion.div>

                    {/* Accent frame */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-brand-primary z-20"></div>
                </motion.div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-5xl text-brand-dark mb-8">
                    The Artist<span className="text-brand-primary">.</span>
                    </h2>
                    
                    <p className="font-sans font-light text-brand-secondary text-lg leading-loose mb-6">
                        My work is an exploration of silence and sound, captured in ink. 
                        Blending the disciplined traditions of classical calligraphy with the 
                        airy minimalism of modern art, I strive to create pieces that breathe 
                        life into the spaces they inhabit. 
                    </p>
                    
                    <p className="font-sans font-light text-brand-muted text-lg leading-loose">
                         Every stroke is intentional, every curve a meditation. 
                         I invite you to pause and find your own reflection within the lines.
                    </p>

                    <div className="mt-10">
                         <h3 className="font-script text-6xl text-brand-dark">Maryum</h3>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;