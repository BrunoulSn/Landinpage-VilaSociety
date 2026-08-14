import React from "react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import BentoGrid from "@/src/components/BentoGrid";
import VideoGallery from "@/src/components/VideoGallery";
import Pricing from "@/src/components/Pricing";
import Testimonials from "@/src/components/Testimonials";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden">
      <Navbar />
      <Hero />
      <BentoGrid />
      <VideoGallery />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
