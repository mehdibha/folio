import React from "react";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Experience from "../../sections/Experience";
import Projects from "../../sections/Projects";
import Contact from "../../sections/Contact";

const MainHome = () => {
  return (
    <main>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default MainHome;
