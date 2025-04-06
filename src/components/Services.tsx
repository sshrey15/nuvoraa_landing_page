"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurServices: React.FC = () => {
  const services = [
    { number: 1, name: 'PERFORMANCE MARKETING', background: 'bg-[#B15C41]', textColor: 'text-stone-200' },
    { number: 2, name: 'SOCIAL MEDIA MANAGEMENT', background: 'bg-stone-200', textColor: 'text-[#B15C41]' },
    { number: 3, name: 'SEARCH ENGINE OPTIMIZATION', background: 'bg-[#B15C41]', textColor: 'text-stone-200' },
    { number: 4, name: 'WEBSITE DESIGN AND DEVELOPMENT', background: 'bg-stone-200', textColor: 'text-[#B15C41]' },
    { number: 5, name: 'VIDEO PRODUCTION', background: 'bg-[#B15C41]', textColor: 'text-stone-200' }
  ];

  return (
    <section className="w-full bg-black text-white py-8 md:py-16 overflow-hidden">
      {/* Header Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-8 md:mb-16">
        <h3 className="text-center text-white text-lg md:text-xl mb-4">Our Services</h3>
        
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl text-center font-black mb-6 md:mb-8 leading-tight"
          style={{ 
            fontFamily: 'aurora',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            color: '#f0ebe3'
          }}
        >
          SMART STRATEGIES.<br />
          POWERFUL RESULTS.
        </h2>
        
        <div className="w-full h-px bg-gray-600"></div>
      </div>
      
      {/* Full-width Services List with Framer Motion Animations */}
      <div className="w-full space-y-4 md:space-y-6">
        {services.map((service, index) => (
          <ServiceStrip 
            key={index}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

// Service Strip component with Framer Motion
const ServiceStrip: React.FC<{
  service: {
    number: number;
    name: string;
    background: string;
    textColor: string;
  };
  index: number;
}> = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  const variants = {
    hidden: { 
      x: index % 2 === 0 ? 1000 : -1000,
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.8,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`w-full ${service.background} py-6 sm:py-8 md:py-10`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
        <motion.span 
          className={`text-4xl sm:text-5xl md:text-7xl font-bold opacity-90 ${service.textColor}`}
          style={{ 
            fontFamily: 'aurora',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ 
            delay: index * 0.1 + 0.3,
            duration: 0.5
          }}
        >
          {service.number}.
        </motion.span>
        <motion.span 
          className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide ${service.textColor}`}
          style={{ 
            fontFamily: 'aurora',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ 
            delay: index * 0.1 + 0.5,
            duration: 0.5
          }}
        >
          {service.name}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default OurServices;