import { AboutEducation } from "@/components/AboutEducation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { TechDecor } from "@/components/TechDecor";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f3f0f2] text-slate-900">
      <TechDecor />
      <Navbar />
      <main>
        <Hero />
        <AboutEducation />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
