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
    <HeroSection/>

    <WhyWorkWithUs topBorderImage="/pattern.svg" bottomBorderImage="/pattern2.svg" />

    <Companies/>


    <OurApproach topBorderImage="/pattern.svg" bottomBorderImage="/pattern2.svg" />


    <OurServices/>

    <Testimonials topBorderImage="/pattern.svg" bottomBorderImage="/pattern2.svg" />

    <Footer/>
  </>
  );
}
