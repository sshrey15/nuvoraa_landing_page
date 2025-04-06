import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import RingCursor from "@/components/RingCursor";
import OurServices from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";

export default function Home() {
  return (
    <>
    <RingCursor />
      <section id="1">
        <HeroSection />
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

      <section id="5">
        <OurServices />
      </section>

<section id="6">
<Testimonials

topBorderImage="/pattern.svg"
bottomBorderImage="/pattern2.svg"
/>
</section>
     

      <Footer />
    </>
  );
}
