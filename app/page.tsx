import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import SnowFall from "@/components/SnowFall";
import Footer from "@/components/Footer";
import Project from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <SnowFall />
      <Navbar />
      <Hero />

      <div
        className="h-1 w-full opacity-40"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(182, 255, 82) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      <AboutMe />
      <div
        className="h-1 w-full opacity-40"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(182, 255, 82) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      <Project />
      <div
        className="h-1 w-full opacity-40"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(182, 255, 82) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      <Footer />
    </main>
  );
}