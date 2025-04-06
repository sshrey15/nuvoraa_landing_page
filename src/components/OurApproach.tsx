// components/OurApproach.tsx
import React from 'react';
import Image from 'next/image';


interface OurApproachProps {
  topBorderImage: string;
  bottomBorderImage: string;
}

const OurApproach: React.FC<OurApproachProps> = ({
  topBorderImage,
  bottomBorderImage
}) => {
  return (
    <section className="relative w-full">
      {/* Top border pattern */}
       <div className="w-full relative z-10 bg-stone-100">
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
         </div>
      
      {/* Main content area */}
      <div className="w-full bg-stone-100 py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h3 className="text-center text-black text-xl mb-12">Our Approach</h3>
          
          {/* Section 1: Power House Performance Marketing */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-rose-300 opacity-80"></div>
                <Image 
                  src="/images/r1.png" 
                  alt="Power House Performance Marketing" 
                   className="w-full h-auto relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  width={800}
                  height={600}
                />
              </div>
            </div>
              
              {/* Right side - Content */}
              <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-black mb-4 tracking-tight" style={{ fontFamily: 'aurora' }}>
                POWER HOUSE<br />PERFORMANCE MARKETING
              </h2>
              <p className="text-stone-600 mb-6">
                We dont just run campaigns—we build marketing machines that crush the competition. Backed by AI-driven precision, real-time optimization, and data-fueled strategies, we deliver unstoppable growth and maximum ROI. No fluff. No wasted spend. Just pure performance at full throttle.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">Growth Strategy</span>
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">Ad Campaigns</span>
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">CRO Specialists</span>
              </div>
            </div>
          </div>
          
          {/* Section 2: No-Mercy SEO */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
            {/* Left side - Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-black mb-4 tracking-tight" style={{ fontFamily: 'aurora' }}>
                NO-MERCY SEO
              </h2>
              <p className="text-stone-600 mb-6">
                We dont play fair—we play to win. While others chase rankings, we obliterate the competition with precision, power, and a forward strategy. We SEO to pulverize, relentless, and built for total search engine domination. No shortcuts. No compromises. Just brutal efficiency that puts you at the top—and keeps you there.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">Research</span>
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">SEO</span>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <div className="absolute -right-8 -bottom-8 w-16 h-16 rounded-full bg-rose-300 opacity-80"></div>
                <Image
                  src="/images/r2.png" 
                  alt="No-Mercy SEO" 
                   className="w-full h-auto relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
          
          {/* Section 3: Magnetic SMM */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <div className="absolute -left-8 -bottom-8 w-16 h-16 rounded-full bg-rose-300 opacity-80"></div>
                <Image
                  src="/images/r3.png" 
                  alt="Magnetic SMM" 
                   className="w-full h-auto relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-black mb-4 tracking-tight" style={{ fontFamily: 'aurora' }}>
                MAGNETIC SMM
              </h2>
              <p className="text-stone-600 mb-6">
                We dont chase attention—we command it. With AI-driven precision and unstoppable strategy, we turn brands into irresistible forces that dominate every feed. Engage. Influence. Convert. Ignite movements, create die-hard followers, and turn engagement into unstoppable growth.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">Performance</span>
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">SMM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16 mt-16">
            {/* Left side - Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-black mb-4 tracking-tight" style={{ fontFamily: 'aurora' }}>
                DIGITAL<br />DOMINATION
              </h2>
              <p className="text-stone-600 mb-6">
                We orchestrate comprehensive digital takeovers that leave no stone unturned. From cutting-edge web development to conversion-focused design, our full-spectrum approach ensures your brand dominates every digital touchpoint. We build, optimize, and scale digital ecosystems that crush competition and drive unstoppable growth.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">Web Development</span>
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">UI/UX</span>
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">CRO</span>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-rose-300 opacity-80"></div>
                <Image
                  src="/images/r4.png" 
                  alt="Digital Domination" 
                   className="w-full h-auto relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

          {/* Section 5: Brand Warfare */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-rose-300 opacity-80"></div>
                <Image
                  src="/images/r5.png" 
                  alt="Brand Warfare" 
                   className="w-full h-auto relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-black mb-4 tracking-tight" style={{ fontFamily: 'aurora' }}>
                BRAND<br />WARFARE
              </h2>
              <p className="text-stone-600 mb-6">
                In the battlefield of brands, we create warriors that stand apart. Our brand strategy combines psychological triggers, market intelligence, and creative firepower to forge unforgettable brand experiences. We dont just position brands—we create market legends that dominate mindshare and crush recall.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">Brand Strategy</span>
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">Identity</span>
                <span className="px-4 py-1 bg-rose-300 rounded-full text-sm">Design</span>
              </div>
            </div>
          </div>

        </div>
      </div>






      {/* Bottom border pattern */}
          <div className="w-full relative z-10 bg-stone-100">
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
            </div>
    </section>
  );
};

export default OurApproach;