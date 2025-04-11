"use client"
import { useState, useRef } from "react";
import Companies from "@/components/Companies";

import HeroSection from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import RingCursor from "@/components/RingCursor";
// import OurServices from "@/components/Services";
// import Testimonials from "@/components/Testimonials";

import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import PageTornTransition from "@/components/PageTornAnimation";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <PageTornTransition />
      <RingCursor />
      <section id="1">
        <HeroSection />
      </section>

      <section id="video-section" className="relative w-full h-screen bg-black overflow-hidden group">
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play/Pause Button - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={togglePlayPause}
            className="z-10 w-16 h-16 md:w-20 md:h-20 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 md:opacity-0 md:group-hover:opacity-70"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                <rect x="14" y="4" width="4" height="16" fill="currentColor" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <polygon points="5,3 19,12 5,21" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </section>

      <section id="2">
        <WhyWorkWithUs
          topBorderImage="/pattern.svg"
          bottomBorderImage="/pattern2.svg"
        />
      </section>

      <section id="3">
        <Companies />
      </section>

      <section id="4">
        <OurApproach
          topBorderImage="/pattern.svg"
          bottomBorderImage="/pattern2.svg"
        />
      </section>

      {/* <section id="5">
        <OurServices />
      </section>

<section id="6">
<Testimonials

topBorderImage="/pattern.svg"
bottomBorderImage="/pattern2.svg"
/>
</section> */}
     
      
    </>
  );
}
