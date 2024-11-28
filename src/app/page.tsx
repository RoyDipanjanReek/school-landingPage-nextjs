import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instractor from "@/components/Instractor";
import TestimonialCard from "@/components/TestimonialCard";
import UpcommingWebiners from "@/components/UpcommingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
      
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <TestimonialCard/>
        <UpcommingWebiners/>
        <Instractor/>
        <Footer/>
    </main>
  );
}
