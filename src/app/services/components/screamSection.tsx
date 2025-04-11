"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Types for our service items
interface ServiceCard {
  title: string;
  description: string;
  iconSrc?: string; // Optional icon
}

interface MarketingServicesProps {
  mainTitle: string;
  subTitle?: string;
  backgroundColor: string;
  textColor: string;
  topBorderImage?: string;
  bottomBorderImage?: string;
  services: ServiceCard[];
}

const MotionDiv = motion.div;

const MarketingServices: React.FC<MarketingServicesProps> = ({
  mainTitle,
  subTitle,
  backgroundColor,
  textColor,
  topBorderImage,
  bottomBorderImage,
  services
}) => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className={`relative w-full ${backgroundColor} pt-20 md:pt-0`}>
      {/* Top Border Image (if provided) */}
      {topBorderImage && (
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-full relative z-10 ${backgroundColor}`}
        >
          <Image
            src={topBorderImage}
            alt="Top Decorative Border"
            width={1920}
            height={200}
            className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
          />
        </MotionDiv>
      )}

      {/* Content */}
      <div className={`w-full py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 relative z-20 max-w-7xl mx-auto ${backgroundColor}`}>
        {/* Main Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 md:mb-16 mt-16 md:mt-20"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${textColor}`}>
            {mainTitle}
          </h2>
          
          {subTitle && (
            <p className={`mt-2 md:mt-4 text-lg md:text-xl ${textColor} opacity-80`}>
              {subTitle}
            </p>
          )}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col"
            >
              {/* Placeholder for icon or image */}
              <div className="bg-gray-200 w-24 h-24 mb-6">
                {service.iconSrc && (
                  <Image
                    src={service.iconSrc}
                    alt={`${service.title} icon`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Service Title */}
              <h3 className={`text-xl font-bold mb-3 uppercase tracking-wide ${textColor}`}>
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className={`${textColor} opacity-80 text-sm leading-relaxed`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border Image (if provided) */}
      {bottomBorderImage && (
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-full relative z-10 ${backgroundColor}`}
        >
          <Image
            src={bottomBorderImage}
            alt="Bottom Decorative Border"
            width={1920}
            height={200}
            className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
          />
        </MotionDiv>
      )}
    </section>
  );
};

export default MarketingServices;