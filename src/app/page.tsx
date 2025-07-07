import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Bio from "@/components/sections/Bio";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <Bio />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
