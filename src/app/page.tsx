"use client"
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import RingCursor from "@/components/RingCursor";
// import OurServices from "@/components/Services";
// import Testimonials from "@/components/Testimonials";

import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import PageTornTransition from "@/components/PageTornAnimation";



export default function Home() {




  return (
    <>
    <PageTornTransition />
    <RingCursor />
      <section id="1">
        <HeroSection />
      </section>

      <section id="video-section" className="relative w-full h-screen bg-black overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
     

      <Footer />
    </>
  );
}
