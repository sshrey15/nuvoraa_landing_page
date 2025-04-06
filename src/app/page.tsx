import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import OurServices from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";

export default function Home() {
  return (
    <>
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

      <section>
        <OurServices />
      </section>

      <Testimonials
        topBorderImage="/pattern.svg"
        bottomBorderImage="/pattern2.svg"
      />

      <Footer />
    </>
  );
}
