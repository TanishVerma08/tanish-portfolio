import { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      let currentSection = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section id="about" className="min-h-screen pt-20">
          <div className="mb-12 pb-6 border-b-2 border-blue-500/30" />
          <About />
        </section>

        <section id="experience" className="min-h-screen pt-20">
          <div className="mb-12 pb-6 border-b-2 border-indigo-500/30" />
          <Experience />
        </section>

        <section id="projects" className="min-h-screen pt-20">
          <div className="mb-12 pb-6 border-b-2 border-cyan-500/30" />
          <Projects />
        </section>

        <section id="contact" className="min-h-screen pt-20">
          <div className="mb-12 pb-6 border-b-2 border-purple-500/30" />
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
