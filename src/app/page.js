import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Community from "@/components/sections/Community/Community";
import Features from "@/components/sections/Features/Features";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import Testimonial from "@/components/sections/Testimonial/Testimonial";
import Yourown from "@/components/sections/Yourown/Yourown";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-vh-100">
        <HeroSection />
        <Features />
        <Yourown />
        <Testimonial />
        <Community />
      </div>
      <Footer />
    </main>
  );
}
