"use client";

import Navbar from "@/components/Navbar";
import LightRays from "@/ui/LightRays/LightRays";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <div className="absolute inset-0 z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <Hero />
      <Teams />
      <section className="h-screen flex items-center justify-center">
        <Footer />
      </section>
    </div>
  );
}
