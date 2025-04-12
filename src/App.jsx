import { useState } from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <div className="texture-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      {/* <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer /> */}
    </>
  );
}

export default App;
