// import React from "react";
// import { GrCertificate } from "react-icons/gr";
// import { MdCastForEducation } from "react-icons/md";
// import { FaCode } from "react-icons/fa";
// import { SiKnowledgebase } from "react-icons/si";

// const Resume = () => {
//   return (
//     <main className="">
//       <h1 className="text-3xl">
//         <span className="text-green-300">R</span>esume
//       </h1>
//       <hr className="mt-5 mb-5 text-gray-400" />

//       <section className="overflow-x-auto mt-5">
//         <table className="min-w-full border border-gray-300 rounded-lg">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 bg-gray-100 text-left text-xl font-semibold">
//                 <span className="flex items-center gap-2">
//                   <GrCertificate className="w-7 h-7 text-green-500" />
//                   EXPERIENCE
//                 </span>
//               </th>
//               <th className="px-6 py-3 bg-gray-100 text-left text-xl font-semibold">
//                 <span className="flex items-center gap-2">
//                   <MdCastForEducation className="w-7 h-7 text-green-500" />
//                   EDUCATION
//                 </span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               {/* Experience Column */}
//               <td className="align-top px-6 py-4 border-t border-gray-200">
//                 <div className="mb-5">
//                   <h2 className="text-lg font-semibold">Front-end Developer</h2>
//                   <p className="text-gray-600">Tech Company, 2021 - Present</p>
//                   <ul className="list-disc mt-2 text-gray-700 ml-5">
//                     <li>
//                       Monitored technical aspects of the front-end delivery for
//                       several projects.
//                     </li>
//                   </ul>
//                 </div>
//                 <hr className="my-5 text-gray-300" />
//                 <div>
//                   <h2 className="text-lg font-semibold">Junior Developer</h2>
//                   <p className="text-gray-600">Startup Inc., 2019 - 2021</p>
//                   <ul className="list-disc mt-2 text-gray-700 ml-5">
//                     <li>
//                       Assisted in the development of web applications using
//                       HTML, CSS, and JavaScript and worked closely with senior
//                       developers to learn best practices and improve coding
//                       skills.
//                     </li>
//                   </ul>
//                 </div>
//               </td>
//               {/* Education Column */}
//               <td className="align-top px-6 py-4 border-t border-gray-200">
//                 <div className="mb-5">
//                   <h2 className="text-lg font-semibold">Programming Course</h2>
//                   <p className="text-gray-600">Coursera</p>
//                   <ul className="list-disc mt-2 text-gray-700 ml-5">
//                     <li>
//                       Graduated with honors and completed coursework in web
//                       development.
//                     </li>
//                   </ul>
//                 </div>
//                 <hr className="my-5 text-gray-300" />
//                 <div>
//                   <h2 className="text-lg font-semibold">
//                     Certification in Full Stack Development
//                   </h2>
//                   <p className="text-gray-600">Online Course, 2020</p>
//                   <ul className="list-disc mt-2 text-gray-700 ml-5">
//                     <li>
//                       Completed a comprehensive course covering both front-end
//                       and back-end technologies.
//                     </li>
//                   </ul>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </section>

//       {/* My Skills */}

//       <section className="mt-10">
//         <h1 className="text-3xl">
//           <span className="text-green-300">My</span>Skills
//         </h1>
//         <hr className="mt-5 text-gray-400" />

//         <table className="mt-5 min-w-full border border-gray-300 rounded-lg">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 bg-gray-100 text-left text-xl font-semibold">
//                 <span className="flex items-center gap-2">
//                   <FaCode className="w-7 h-7 text-green-500" />
//                   CODING
//                 </span>
//               </th>
//               <th className="px-6 py-3 bg-gray-100 text-left text-xl font-semibold">
//                 <span className="flex items-center gap-2">
//                   <SiKnowledgebase className="w-7 h-7 text-green-500" />
//                   KNOWLEDGE
//                 </span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               {/* Coding Column */}
//               <td className="align-top px-6 py-4 grid-cols-2 grid gap-6">
//                 {/* WordPress - 75% */}
//                 <div className="flex flex-col items-center mb-6">
//                   <div className="relative size-20">
//                     <svg
//                       className="size-full -rotate-90"
//                       viewBox="0 0 36 36"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         fill="none"
//                         className="stroke-current text-gray-200 dark:text-neutral-700"
//                         strokeWidth="2"
//                       ></circle>
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         fill="none"
//                         className="stroke-current text-green-600 dark:text-green-500"
//                         strokeWidth="2"
//                         strokeDasharray="100"
//                         strokeDashoffset={25} // 100 - 75 = 25
//                         strokeLinecap="round"
//                       ></circle>
//                     </svg>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                       <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
//                         75%
//                       </span>
//                     </div>
//                   </div>
//                   <h3>WordPress</h3>
//                 </div>
//                 {/* Web3 - 75% */}
//                 <div className="flex flex-col items-center mb-6">
//                   <div className="relative size-20">
//                     <svg
//                       className="size-full -rotate-90"
//                       viewBox="0 0 36 36"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         fill="none"
//                         className="stroke-current text-gray-200 dark:text-neutral-700"
//                         strokeWidth="2"
//                       ></circle>
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         fill="none"
//                         className="stroke-current text-green-600 dark:text-green-500"
//                         strokeWidth="2"
//                         strokeDasharray="100"
//                         strokeDashoffset={25} // 100 - 75 = 25
//                         strokeLinecap="round"
//                       ></circle>
//                     </svg>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                       <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
//                         75%
//                       </span>
//                     </div>
//                   </div>
//                   <h3>Thirdweb</h3>
//                 </div>
//                 {/* HTML / CSS - 95% */}
//                 <div className="flex flex-col items-center mb-6">
//                   <div className="relative size-20">
//                     <svg
//                       className="size-full -rotate-90"
//                       viewBox="0 0 36 36"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         fill="none"
//                         className="stroke-current text-gray-200 dark:text-neutral-700"
//                         strokeWidth="2"
//                       ></circle>
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         fill="none"
//                         className="stroke-current text-green-600 dark:text-green-500"
//                         strokeWidth="2"
//                         strokeDasharray="100"
//                         strokeDashoffset={5} // 100 - 95 = 5
//                         strokeLinecap="round"
//                       ></circle>
//                     </svg>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                       <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
//                         95%
//                       </span>
//                     </div>
//                   </div>
//                   <h3>HTML / CSS</h3>
//                 </div>
//                 {/* React / JavaScript - 85% */}
//                 <div className="flex flex-col items-center">
//                   <div className="relative size-20">
//                     <svg
//                       className="size-full -rotate-90"
//                       viewBox="0 0 36 36"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         fill="none"
//                         className="stroke-current text-gray-200 dark:text-neutral-700"
//                         strokeWidth="2"
//                       ></circle>
//                       <circle
//                         cx="18"
//                         cy="18"
//                         r="16"
//                         fill="none"
//                         className="stroke-current text-green-600 dark:text-green-500"
//                         strokeWidth="2"
//                         strokeDasharray="100"
//                         strokeDashoffset={15} // 100 - 85 = 15
//                         strokeLinecap="round"
//                       ></circle>
//                     </svg>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//                       <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
//                         85%
//                       </span>
//                     </div>
//                   </div>
//                   <h3>React / JavaScript</h3>
//                 </div>
//               </td>
//               {/* Knowledge Column */}
//               <td className="align-top px-6 py-4">
//                 <ul className="ml-5 text-gray-700 space-y-2">
//                   <li className="flex items-center gap-2">
//                     <span className="text-green-500 text-lg">✔</span>
//                     Website hosting
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-green-500 text-lg">✔</span>
//                     WordPress Development
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-green-500 text-lg">✔</span>
//                     Hosting Installation
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-green-500 text-lg">✔</span>
//                     SEO Optimize
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-green-500 text-lg">✔</span>
//                     Responsive and mobile-ready
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-green-500 text-lg">✔</span>
//                     Advertising services
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-green-500 text-lg">✔</span>
//                     HTML, CSS, jQuery
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-green-500 text-lg">✔</span>
//                     Search engine marketing
//                   </li>
//                 </ul>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </section>
//     </main>
//   );
// };

// export default Resume;

import React from "react";
import { GrCertificate } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { SiKnowledgebase } from "react-icons/si";

const Resume = () => {
  return (
    <main className="">
      <h1 className="text-3xl">
        <span className="text-green-300">R</span>esume
      </h1>
      <hr className="mt-5 mb-5 text-gray-400" />

      {/* Responsive Table: Scroll on mobile, side-by-side on desktop */}
      <section className="overflow-x-auto mt-5">
        <div className="w-full min-w-[320px]">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-100 text-left text-xl font-semibold min-w-[180px]">
                  <span className="flex items-center gap-2">
                    <GrCertificate className="w-7 h-7 text-green-500" />
                    EXPERIENCE
                  </span>
                </th>
                <th className="px-4 py-3 bg-gray-100 text-left text-xl font-semibold min-w-[180px]">
                  <span className="flex items-center gap-2">
                    <MdCastForEducation className="w-7 h-7 text-green-500" />
                    EDUCATION
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                {/* Experience Column */}
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="mb-5">
                    <h2 className="text-lg font-semibold">
                      Front-end Developer
                    </h2>
                    <p className="text-gray-600">
                      Tech Company, 2021 - Present
                    </p>
                    <ul className="list-disc mt-2 text-gray-700 ml-5">
                      <li>
                        Monitored technical aspects of the front-end delivery
                        for several projects.
                      </li>
                    </ul>
                  </div>
                  <hr className="my-5 text-gray-300" />
                  <div>
                    <h2 className="text-lg font-semibold">Junior Developer</h2>
                    <p className="text-gray-600">Startup Inc., 2019 - 2021</p>
                    <ul className="list-disc mt-2 text-gray-700 ml-5">
                      <li>
                        Assisted in the development of web applications using
                        HTML, CSS, and JavaScript and worked closely with senior
                        developers to learn best practices and improve coding
                        skills.
                      </li>
                    </ul>
                  </div>
                </td>
                {/* Education Column */}
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="mb-5">
                    <h2 className="text-lg font-semibold">
                      Programming Course
                    </h2>
                    <p className="text-gray-600">Coursera</p>
                    <ul className="list-disc mt-2 text-gray-700 ml-5">
                      <li>
                        Graduated with honors and completed coursework in web
                        development.
                      </li>
                    </ul>
                  </div>
                  <hr className="my-5 text-gray-300" />
                  <div>
                    <h2 className="text-lg font-semibold">
                      Certification in Full Stack Development
                    </h2>
                    <p className="text-gray-600">Online Course, 2020</p>
                    <ul className="list-disc mt-2 text-gray-700 ml-5">
                      <li>
                        Completed a comprehensive course covering both front-end
                        and back-end technologies.
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* My Skills */}
      <section className="mt-10">
        <h1 className="text-3xl">
          <span className="text-green-300">My</span>Skills
        </h1>
        <hr className="mt-5 text-gray-400" />

        {/* Responsive: Stack columns on mobile, side-by-side on md+ */}
        <div className="w-full overflow-x-auto">
          <table className="mt-5 w-full border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-100 text-left text-xl font-semibold min-w-[180px]">
                  <span className="flex items-center gap-2">
                    <FaCode className="w-7 h-7 text-green-500" />
                    CODING
                  </span>
                </th>
                <th className="px-4 py-3 bg-gray-100 text-left text-xl font-semibold min-w-[180px]">
                  <span className="flex items-center gap-2">
                    <SiKnowledgebase className="w-7 h-7 text-green-500" />
                    KNOWLEDGE
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                {/* Coding Column */}
                <td className="px-4 py-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* WordPress - 75% */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative size-20">
                        <svg
                          className="size-full -rotate-90"
                          viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-gray-200 dark:text-neutral-700"
                            strokeWidth="2"
                          ></circle>
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-green-600 dark:text-green-500"
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset={25}
                            strokeLinecap="round"
                          ></circle>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
                            75%
                          </span>
                        </div>
                      </div>
                      <h3 className="text-sm">WordPress</h3>
                    </div>
                    {/* Web3 - 75% */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative size-20">
                        <svg
                          className="size-full -rotate-90"
                          viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-gray-200 dark:text-neutral-700"
                            strokeWidth="2"
                          ></circle>
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-green-600 dark:text-green-500"
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset={25}
                            strokeLinecap="round"
                          ></circle>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
                            75%
                          </span>
                        </div>
                      </div>
                      <h3 className="text-sm">Thirdweb</h3>
                    </div>
                    {/* HTML / CSS - 95% */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative size-20">
                        <svg
                          className="size-full -rotate-90"
                          viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-gray-200 dark:text-neutral-700"
                            strokeWidth="2"
                          ></circle>
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-green-600 dark:text-green-500"
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset={5}
                            strokeLinecap="round"
                          ></circle>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
                            95%
                          </span>
                        </div>
                      </div>
                      <h3 className="text-sm">HTML / CSS</h3>
                    </div>
                    {/* React / JavaScript - 85% */}
                    <div className="flex flex-col items-center">
                      <div className="relative size-20">
                        <svg
                          className="size-full -rotate-90"
                          viewBox="0 0 36 36"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-gray-200 dark:text-neutral-700"
                            strokeWidth="2"
                          ></circle>
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-green-600 dark:text-green-500"
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset={15}
                            strokeLinecap="round"
                          ></circle>
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span className="text-center text-2xl font-bold text-green-600 dark:text-green-500">
                            85%
                          </span>
                        </div>
                      </div>
                      <h3 className="text-sm">React / JS / TS</h3>
                    </div>
                  </div>
                </td>
                {/* Knowledge Column */}
                <td className="px-4 py-4 border-t border-gray-200">
                  <ul className="ml-2 text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      Website hosting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      WordPress Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      Smart contract development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      Decentralized application (dApp) integration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      Blockchain wallet connectivity
                    </li>
                    
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      Responsive and mobile-ready
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      Advertising services
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      HTML, CSS, jQuery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500 text-lg">✔</span>
                      Morderator
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Resume;
