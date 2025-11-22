import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse parallax logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    x.set((clientX / innerWidth - 0.5) * 40); // Move range
    y.set((clientY / innerHeight - 0.5) * 40);
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-bg perspective-1000"
    >
      {/* 3D Background Layer - Ink Drop */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40"
        style={{ x: mouseXSpring, y: mouseYSpring, scale: 1.1 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Ink background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-transparent to-brand-bg/90"></div>
      </motion.div>

      {/* Floating Elements (Decorative 3D objects) */}
      <motion.div 
        className="absolute top-1/4 left-[10%] w-32 h-32 border border-brand-primary/20 rounded-full blur-[2px] z-0"
        style={{ y: y1, rotate: 15 }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-[15%] w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl z-0"
        style={{ y: y2 }}
      />

      {/* Main Content with Inverse Parallax */}
      <div className="z-10 text-center px-6 relative preserve-3d">
        <motion.div
           style={{ x: useTransform(mouseXSpring, (val) => val * -1.5), y: useTransform(mouseYSpring, (val) => val * -1.5) }}
        >
          <motion.h1
            className="font-script text-5xl md:text-7xl lg:text-8xl text-brand-dark mb-4 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            Calligraphy By Maryum
          </motion.h1>
          
          <motion.div 
            className="h-px w-32 bg-brand-primary mx-auto mb-8 shadow-[0_0_15px_rgba(198,168,124,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            className="font-serif italic text-xl md:text-2xl text-brand-secondary/80 tracking-wide mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            The art of sacred ink & silence.
          </motion.p>
        </motion.div>

        <motion.button
          className="group relative px-10 py-4 bg-transparent overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
           <span className="absolute inset-0 border border-brand-primary/50 group-hover:border-brand-primary transition-colors duration-500 transform skew-x-12"></span>
           <span className="absolute inset-0 bg-brand-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></span>
           <span className="relative font-sans uppercase tracking-[0.2em] text-xs font-semibold text-brand-dark group-hover:text-brand-dark/80">Discover Collections</span>
        </motion.button>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;