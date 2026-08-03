import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import FocusArea from "@/components/FocusArea";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/ProjectsSection";
import SiteEffects from "@/components/SiteEffects";
import Skills from "@/components/SkillsSection";
import { InView } from "@/components/motion-primitives/in-view";
import StructuredData from "@/components/seo/StructuredData";
import { revealVariants } from "@/lib/motion";

function SectionDivider() {
  return (
    <InView
      aria-hidden="true"
      variants={revealVariants.fade}
      className="w-full"
    >
      <div className="section-divider" />
    </InView>
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <SiteEffects />
      <Navbar />

      <main className="relative min-h-screen overflow-x-clip bg-[#050505] text-white">
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
      </main>

      <SectionDivider />
      <Footer />
    </>
  );
}
