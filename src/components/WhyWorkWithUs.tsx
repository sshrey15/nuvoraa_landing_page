"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WhyWorkWithUsProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

const MotionDiv = motion.div;

const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({
  topBorderImage,
  bottomBorderImage,
}) => {
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative bg-[#E0D9CD] w-full">
      {/* Top Border */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative z-10 bg-[#E0D9CD]"
      >
        <Image
          src={topBorderImage}
          alt="Top Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
        />
      </MotionDiv>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full bg-[#E0D9CD] py-16 px-6 md:px-12 lg:px-20 relative z-20 max-w-5xl mx-auto"
      >
        {/* Section Label */}
        <motion.h3
          variants={revealVariants}
          className="text-center text-black text-xl mb-20"
        >
          (Why Work with us?)
        </motion.h3>

        {/* Bold Statement */}
        <motion.div variants={revealVariants} className="mb-10">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight leading-tight"
            style={{
              fontFamily: 'aurora',
              textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
              letterSpacing: '-0.02em',
            }}
          >
            WE DONT COMPETE
            <br />
            WE DOMINATE
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div variants={revealVariants} className="mb-12">
          <p className="text-center text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We go beyond traditional marketing by leveraging predictive analytics, machine learning, and intelligent
            automation to outmaneuver the competition. Our AI-driven approach optimizes campaigns in real time, delivering
            hyper-personalized messaging, laser-precise targeting, and data-backed decisions that maximize impact.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={revealVariants} className="text-center">
          <Link href="/story">
            <span className="inline-block border-b-2 border-black pb-1 text-lg hover:border-orange-500 hover:text-orange-600 transition-colors cursor-pointer">
              Know Our Story
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Border */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative z-10 bg-[#E0D9CD]"
      >
        <Image
          src={bottomBorderImage}
          alt="Bottom Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
        />
      </MotionDiv>
    </section>
  );
};

export default WhyWorkWithUs;
