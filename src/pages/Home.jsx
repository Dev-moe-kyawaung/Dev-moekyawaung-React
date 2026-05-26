import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certificates from "../components/sections/Certificates";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
    </>
  );
}
