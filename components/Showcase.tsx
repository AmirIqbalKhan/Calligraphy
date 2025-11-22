import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShowcaseItem } from '../types';

const items: ShowcaseItem[] = [
  { id: 1, title: "Thuluth", description: "Monumental presence.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI4NA2tQBt_kol8RHjmvrr-OHY1I0X8f5NQ&s" },
  { id: 2, title: "Diwani", description: "Royal complexity.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QjNBQTy7StnYtFt9W05NFCKzW_x_TmA7tQ&s" },
  { id: 3, title: "Maghribi", description: "Flowing tradition.", image: "https://i.pinimg.com/474x/8c/6a/0c/8c6a0c7389d15bb20ef7ce40ede9a3d8.jpg" },
  { id: 4, title: "Abstract", description: "Modern fusion.", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop" },
];

const TiltCard: React.FC<{ item: ShowcaseItem; index: number }> = ({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative w-full aspect-[3/4] cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        <div className="absolute inset-4 border border-brand-primary/30 z-20 pointer-events-none transform translate-z-10" />
        
        <div className="w-full h-full bg-white shadow-2xl overflow-hidden rounded-sm transform translate-z-0">
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
            />
        </div>

        <div className="absolute -bottom-6 -right-6 bg-brand-bg px-6 py-4 shadow-xl z-30 transform translate-z-20 border-l-2 border-brand-primary">
            <h3 className="font-serif text-2xl text-brand-dark italic">{item.title}</h3>
            <p className="font-sans text-[10px] tracking-widest text-gray-500 uppercase mt-1">{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-brand-primary/20 pb-8"
        >
            <div className="max-w-xl">
                <span className="text-brand-primary font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Heritage</span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark leading-tight">
                Timeless Scripts, <br />
                <span className="italic text-brand-secondary">Modern Interpretation.</span>
                </h2>
            </div>
            <p className="font-sans text-gray-500 text-sm max-w-xs mt-6 md:mt-0 leading-relaxed">
                Exploring the dimensional depth of ink on paper, where tradition meets contemporary minimalism.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {items.map((item, index) => (
            <TiltCard key={item.id} item={item} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;