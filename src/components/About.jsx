import React from "react";
import { FaCss3Alt, FaCode, FaWordpress } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";

const About = () => {
  return (
    <main className="flex flex-col px-4">
      <h1 className="text-3xl">
        <span className="text-green-300">About</span> me
      </h1>
      <hr className="mt-5 mb-5 text-blue-200" />
      <p className="text-gray-600">
        I am a passionate web developer with a focus on creating dynamic and
        responsive user interfaces. My journey in web development began with a
        fascination for how websites work and the technologies behind them. Over
        the years, I have honed my skills in HTML, CSS, and JavaScript, and I am
        always eager to learn new frameworks and libraries to enhance my
        projects.
      </p>
      <section className="mt-5 text-md grid lg:grid-cols-2">
        <p className="">Age . . . . .25</p>
        <p className="">Residence . . . . .Nigeria </p>
        <p className="">Freelance . . . . .Available </p>
        <p className="">Address . . . . .Lagos, Nigeria </p>
      </section>
      <section className="mt-10">
        <h1 className="text-3xl">
          <span className="text-green-300">My</span> Services
        </h1>
        <hr className="mt-5 text-blue-200" />
        <main className="mt-5 grid lg:grid-cols-2 md:grid-cols-2 gap-5">
          <div className="">
            <FaCss3Alt className="w-16 h-16 text-green-500 bg-green-100 p-2 rounded-full" />
            <h1 className="text-xl">Front-end</h1>
            <h2 className="">
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </h2>
          </div>
          <div className="mt-5">
            <FaCode className="w-16 h-16 text-green-500 bg-green-100 p-2 rounded-full" />
            <h1 className="text-xl">Back-End</h1>
            <h2 className="">
              UI/UX focus on the user, frontend focus on the settings of the
              user, and backend focus on the data.
            </h2>
          </div>
          <div className="mt-5">
            <SiHiveBlockchain className="w-16 h-16 text-green-500 bg-green-100 p-2 rounded-full" />
            <h1 className="text-xl">Web3</h1>
            <h2 className="">
              I build decentralized applications (dApps) and smart contracts,
              enabling secure, transparent, and trustless solutions on
              blockchain platforms.
            </h2>
          </div>
          <div className="mt-5">
            <FaWordpress className="w-16 h-16 text-green-500 bg-green-100 p-2 rounded-full" />
            <h1 className="text-xl">WordPress Development</h1>
            <h2 className="">
              WordPress development services improve business websites.
            </h2>
          </div>
        </main>
      </section>
    </main>
  );
};

export default About;
