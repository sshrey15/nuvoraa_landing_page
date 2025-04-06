"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

interface OurApproachProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

const OurApproach: React.FC<OurApproachProps> = ({
  topBorderImage,
  bottomBorderImage
}) => {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const circleAppear = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { 
        delay: 0.3, 
        duration: 0.5 
      } 
    }
  }

  // Reusable Section component for alternating layouts
  const Section = ({ 
    title, 
    description, 
    tags, 
    imageSrc, 
    imageAlt, 
    isReverse = false, 
    index 
  }: { 
    title: string, 
    description: string, 
    tags: string[], 
    imageSrc: string, 
    imageAlt: string, 
    isReverse?: boolean,
    index: number
  }) => {
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center  gap-8 mb-16`}
      >
        {/* Image column */}
        <motion.div variants={fadeInUp} className="w-full md:w-1/2 relative">
          <div className="relative">
            <motion.div
              variants={circleAppear}
              className={`absolute ${isReverse ? '-right-8' : '-left-8'} ${index % 4 === 0 || index % 4 === 3 ? '-top-8' : '-bottom-8'} w-16 h-16 rounded-full bg-rose-300 opacity-80`}
            />
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-auto relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
              width={800}
              height={600}
            />
          </div>
        </motion.div>
        
        {/* Content column */}
        <motion.div variants={fadeInUp} className="w-full overflow-hidden md:w-1/2">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-black mb-4 tracking-tight"
            style={{ fontFamily: 'aurora' }}
          >
            {title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-stone-600 mb-6">
            {description}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-1 bg-rose-300 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  // Section data for consistency
  const sections = [
    {
      title: "POWER HOUSE\nPERFORMANCE MARKETING",
      description: "We dont just run campaigns—we build marketing machines that crush the competition. Backed by AI-driven precision, real-time optimization, and data-fueled strategies, we deliver unstoppable growth and maximum ROI. No fluff. No wasted spend. Just pure performance at full throttle.",
      tags: ["Growth Strategy", "Ad Campaigns", "CRO Specialists"],
      imageSrc: "/images/r1.png",
      imageAlt: "Power House Performance Marketing"
    },
    {
      title: "NO-MERCY SEO",
      description: "We dont play fair—we play to win. While others chase rankings, we obliterate the competition with precision, power, and a forward strategy. We SEO to pulverize, relentless, and built for total search engine domination. No shortcuts. No compromises. Just brutal efficiency that puts you at the top—and keeps you there.",
      tags: ["Research", "SEO"],
      imageSrc: "/images/r2.png",
      imageAlt: "No-Mercy SEO"
    },
    {
      title: "MAGNETIC SMM",
      description: "We dont chase attention—we command it. With AI-driven precision and unstoppable strategy, we turn brands into irresistible forces that dominate every feed. Engage. Influence. Convert. Ignite movements, create die-hard followers, and turn engagement into unstoppable growth.",
      tags: ["Performance", "SMM"],
      imageSrc: "/images/r3.png",
      imageAlt: "Magnetic SMM"
    },
    {
      title: "DIGITAL\nDOMINATION",
      description: "We orchestrate comprehensive digital takeovers that leave no stone unturned. From cutting-edge web development to conversion-focused design, our full-spectrum approach ensures your brand dominates every digital touchpoint. We build, optimize, and scale digital ecosystems that crush competition and drive unstoppable growth.",
      tags: ["Web Development", "UI/UX", "CRO"],
      imageSrc: "/images/r4.png",
      imageAlt: "Digital Domination"
    },
    {
      title: "BRAND\nWARFARE",
      description: "In the battlefield of brands, we create warriors that stand apart. Our brand strategy combines psychological triggers, market intelligence, and creative firepower to forge unforgettable brand experiences. We dont just position brands—we create market legends that dominate mindshare and crush recall.",
      tags: ["Brand Strategy", "Identity", "Design"],
      imageSrc: "/images/r5.png",
      imageAlt: "Brand Warfare"
    }
  ];

  return (
    <section className="relative bg-[#E0D9CD] w-full">
      {/* Top border pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative z-10 bg-[#E0D9CD]"
      >
        <Image
          src={topBorderImage}
          alt="Top Decorative Border"
          width={1920}
          height={200}
          className="w-full h-auto mix-blend-multiply select-none pointer-events-none"
          style={{
            display: 'block',
            imageRendering: 'auto',
          }}
        />
      </motion.div>
      
      {/* Main content area */}
      <div className="w-full bg-[#E0D9CD] py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-black text-xl mb-20"
          >
            (Ready to lead the digital revolution ? Let&apos;s make it happen)
          </motion.h3>
          
          {/* Render all sections with alternating layout */}
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              description={section.description}
              tags={section.tags}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
              isReverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom border pattern */}
      <motion.div
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
          style={{
            display: 'block',
            imageRendering: 'auto',
          }}
        />
      </motion.div>
    </section>
  );
};

export default OurApproach;