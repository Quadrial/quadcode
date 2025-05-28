import React from "react";
import About from "./About";
import Resume from "./Resume";
import Works from "./Works";
import Contact from "./Contact";

function HomeContent({ activeSection }) {
  return (
    <div className="p-6 min-h-[500px] lg:min-h-full">
      {activeSection === "about" && <About />}
      {activeSection === "resume" && <Resume />}
      {activeSection === "works" && <Works />}
      {activeSection === "contact" && <Contact />}
    </div>
  );
}

export default HomeContent;
