import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaMailBulk,
  FaCloudDownloadAlt,
} from "react-icons/fa";

function Sidebar({ setActiveSection, activeSection }) {
  // Typewriter animation state
  const texts = ["Front End Developer", "Back End Developer", "Web3 Developer"];
  const [display, setDisplay] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter animation effect
  useEffect(() => {
    let timeout;
    const currentText = texts[textIndex];

    if (!deleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplay(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplay(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (!deleting && charIndex > currentText.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  const handleButtonClick = (section) => {
    setActiveSection(section.toLowerCase());
  };

  return (
    <>
      
      <main className="flex flex-col md:flex-row gap-10">
        {/* Mobile Top Bar: Only visible on mobile, fixed above nav */}
      <div className="block md:hidden lg:hidden fixed top-0 left-0 right-0 z-50 bg-white px-4 py-2 shadow text-black">
        <h1 className="text-xl font-bold">Isiak Quadri Opeyemi</h1>
        <p className="min-h-[1.5em] text-green-400">
          {display}
          <span className="animate-pulse">|</span>
        </p>
      </div>
        {/* Sidebar content */}
        <nav
          
      className="
          fixed top-[65px] left-0 right-0 z-40
          flex flex-row md:static md:flex-col
          w-full md:w-auto
          h-16 md:h-[300px] lg:h-[300px]
          bg-slate-700 p-2 md:p-5
          shadow md:shadow-none
          items-center
          overflow-x-auto
          md:rounded-md
        
      "
        >
          <div className="flex flex-row md:flex-col w-full justify-around md:justify-start gap-2">
            <button
              onClick={() => handleButtonClick("about")}
              className={`flex flex-col items-center gap-1 p-2 rounded transition-colors ${
                activeSection === "about"
                  ? "text-green-700"
                  : "hover:text-green-300"
              }`}
            >
              <FaUser className="w-5 h-5" />
              <span className="text-xs">About</span>
            </button>
            <button
              onClick={() => handleButtonClick("resume")}
              className={`flex flex-col items-center gap-1 p-2 rounded transition-colors ${
                activeSection === "resume"
                  ? "text-green-700"
                  : "hover:text-green-300"
              }`}
            >
              <FaFileAlt className="w-5 h-5" />
              <span className="text-xs">Resume</span>
            </button>
            <button
              onClick={() => handleButtonClick("works")}
              className={`flex flex-col items-center gap-1 p-2 rounded transition-colors ${
                activeSection === "works"
                  ? "text-green-700"
                  : "hover:text-green-300"
              }`}
            >
              <FaBriefcase className="w-5 h-5" />
              <span className="text-xs">Works</span>
            </button>
            <button
              onClick={() => handleButtonClick("contact")}
              className={`flex flex-col items-center gap-1 p-2 rounded transition-colors ${
                activeSection === "contact"
                  ? "text-green-700"
                  : "hover:text-green-300"
              }`}
            >
              <FaEnvelope className="w-5 h-5" />
              <span className="text-xs">Contact</span>
            </button>
          </div>
        </nav>

        {/* Profile content */}
        <div className=" flex flex-col text-center items-center bg-white rounded-lg shadow-md gap-4 w-auto h-auto ml-0 md:ml-0 lg:ml-0 lg:ml-0 mt-40 md:mt-0">
          <img
            src="/images/profile.jpg"
            alt="Isiak Quadri Opeyemi"
            className="lg:min-w-[450px] lg:h-[300px] max-w-full h-auto mx-auto rounded-md"
          />
          <main className="text-black flex flex-col items-center gap-5">
            <h1 className="text-2xl font-bold">Isiak Quadri Opeyemi</h1>
            <p className="min-h-[1.5em]">
              {display}
              <span className="animate-pulse">|</span>
            </p>
            {/* Social media content */}
            <div className="text-black flex gap-5 justify-center">
              <a
                href="https://github.com/quadrial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/isiakquadri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/quadrial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
              <a
                href="mailto:opequadri2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
                aria-label="Email"
              >
                <FaMailBulk className="w-5 h-5" />
              </a>
            </div>
            {/* Download CV content */}
            <div className="mt-[40px] mb-5 flex flex-col items-center">
              <hr className="w-[50%] border-t-2 border-gray-200 mx-auto my-2" />
              <a
                href="/files/Isiak_Quadri_Opeyemi_CV.pdf"
                download
                className="py-2 flex gap-3 items-center"
              >
                Download CV <FaCloudDownloadAlt className="w-5 h-5" />
              </a>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}

export default Sidebar;
