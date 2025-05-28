import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HomeContent from "./components/HomeContent";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (

    <div className="flex flex-col lg:flex-row px-5 md:px-36 lg:px-80 py-0 lg:py-40 md:py-10 lg:gap-0 md:gap-5 gap-5 md:items-center lg:items-start min-h-screen">
      <Sidebar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <main className="container lg:h-[572px] bg-white lg:w-auto md:w-auto w-auto rounded-md text-black lg:ml-0 md:ml-26 w-full lg:overflow-auto p-6">
        <HomeContent activeSection={activeSection} />
      </main>
    </div>
  );
}

export default App;
