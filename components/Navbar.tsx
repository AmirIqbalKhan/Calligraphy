import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const links = [
    { name: 'Showcase', href: '#showcase' },
    { name: 'Philosophy', href: '#features' },
    { name: 'Collection', href: '#collections' },
    { name: 'Artist', href: '#artist' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 shadow-2xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="font-script text-2xl md:text-3xl text-white mb-2 md:mb-0 hover:text-brand-primary transition-colors select-none">
          CaligraphyByMaryum
        </a>

        <div className="flex space-x-6 md:space-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-brand-primary transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[0.5px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;