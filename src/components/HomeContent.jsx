import React from "react";
import About from "./About";
import Resume from "./Resume";
import Works from "./Works";
import Contact from "./Contact";

function HomeContent({ activeSection }) {
  return (
    <div className="">
      {activeSection === "about" && <About />}
      {activeSection === "resume" && <Resume />}
      {activeSection === "works" && <Works />}
      {activeSection === "contact" && <Contact />}
    </div>
  );
}

export default HomeContent;
