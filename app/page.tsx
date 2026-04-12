"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import SnowFall from "@/components/SnowFall";
import Footer from "@/components/Footer";
import Project from "@/components/ProjectsSection";
import Preloader from "@/components/Preloader";
import Skills from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import FocusArea from "@/components/FocusArea";

function SectionDivider() {
  return (
    <div
      className="h-1 w-full opacity-40"
      style={{
        background:
          "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(182, 255, 82) 50%, rgba(255, 255, 255, 0) 100%)",
      }}
    />
  );
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
        <SnowFall />
        <Navbar />
        <Hero />

        <SectionDivider />
        <AboutMe />

        <SectionDivider />
        <FocusArea />

        <SectionDivider />
        <Project />

        <SectionDivider />
        <Skills />

        <SectionDivider />
        <ContactSection />

        <SectionDivider />
        <Footer />
      </main>
    </>
  );
}