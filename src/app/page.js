'use client'

import Lenis from 'lenis';
import Hero from "./Components/sections/Hero";
import Widgets from "./Components/sections/Widgets";
import Projects from "./Components/sections/Projects";
import Phases from "./Components/sections/Phases";
import Contact from './Components/sections/Contact';
import Navbar from './Components/utils/Navbar';

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (typeof window !== 'undefined') {
    new Lenis({ autoRaf: true });
  }

  return (
    <div className="mb-[50rem] h-screen relative">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <div id="about" className="mt-[15rem] flex flex-col gap-10 lg:gap-6.5">
        <Widgets />
        <Projects />
        <Phases />
        <Contact />
      </div>
    </div>
  );
}
