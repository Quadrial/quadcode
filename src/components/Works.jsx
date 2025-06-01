import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { VscGithubAction } from "react-icons/vsc";
import { RxExternalLink } from "react-icons/rx";

export const Works = () => {
  return (
    <section className="px-12 " name="projectSection">
      <main className="flex flex-col justify-center items-center content-center text-center">
        <h1 className="text-3xl">
          <span className="text-green-300">P</span>rojects
        </h1>
        <p className=" text-md">Innovations Brought to Life</p>
      </main>
      <div className="pb-1">
        {" "}
        {/* Add this wrapper for bottom padding */}
        <Swiper
          className="mt-6"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {/*  Doc SwiperSlides */}
          <SwiperSlide >
            <div className="border rounded-xl px-1 py-1">
              <div className="flex flex-col items-center gap-[15px]">
                {/* Embed the live preview in an iframe */}
                <iframe
                  src="https://doctor-appointment-frontend-topaz.vercel.app/"
                  title="Doctor Appointment Preview"
                  className="w-full h-auto md:h-auto rounded-[20px] overflow-hidden"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h4 className="">Doctor Appointment Landingpage</h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 font-[400]">
                Is a user-friendly web design that simplifies the process of
                booking appointments with doctors. It allows patients to easily
                access medical professionals, view their availability, and
                schedule appointments at their convenience.
              </p>
              <div className=" flex gap-2">
                <p className="font-bold">Toolkit: </p>
                <p>HTML, React, Tailwind CSS</p>
              </div>
              <div className="font-semibold flex gap-10 underline">
                <div className="flex gap-2 items-center">
                  <RxExternalLink />
                  <a
                    href="https://doctor-appointment-frontend-topaz.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live preview
                  </a>
                </div>

                <div className="flex gap-2 items-center">
                  <VscGithubAction />
                  <a
                    href="https://github.com/Quadrial/Doctor-Appointment-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*  Bookmark SwiperSlides */}
          <SwiperSlide>
            <div className="border rounded-lg">
              <div className="flex flex-col items-center gap-[13px]">
                {/* Embed the live preview in an iframe */}
                <iframe
                  src="https://bookmarklandingpage-five.vercel.app/"
                  title="Doctor Appointment Preview"
                  className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h4 className="">Bookmark Landing Page</h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 font-[400]">
                The Bookmark Landing Page is a clean, modern web interface
                designed to promote and demonstrate a bookmarking tool or
                service. The landing page highlights the main features of the
                tool, providing an easy-to-use interface for users to save and
                organize web links.
              </p>
              <div className="mt- flex gap-2">
                <p className="font-bold">Toolkit: </p>
                <p>HTML, React, Tailwind CSS</p>
              </div>
              <div className="mt- font-semibold flex gap-10 underline">
                <div className="flex gap-2 items-center">
                  <RxExternalLink />
                  <a
                    href="https://bookmarklandingpage-five.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live preview
                  </a>
                </div>

                <div className="flex gap-2 items-center">
                  <VscGithubAction />
                  <a
                    href="https://github.com/Quadrial/Bookmark-Landing-Page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*  Space SwiperSlides */}
          <SwiperSlide>
            <div className="border rounded-lg">
              <div className="flex flex-col items-center gap-[13px]">
                {/* Embed the live preview in an iframe */}
                <iframe
                  src="https://space-frontend.vercel.app/"
                  title="Doctor Appointment Preview"
                  className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h4 className="">Space tourism multi-page website</h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 font-[400]">
                Is a user-friendly web design that simplifies the process of
                booking appointments with doctors. It allows patients to easily
                access medical professionals, view their availability, and
                schedule appointments at their convenience.
              </p>
              <div className="mt- flex gap-2">
                <p className="font-bold">Toolkit: </p>
                <p>HTML, React, Tailwind CSS</p>
              </div>
              <div className="mt- font-semibold flex gap-10 underline">
                <div className="flex gap-2 items-center">
                  <RxExternalLink />
                  <a
                    href="https://space-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live preview
                  </a>
                </div>

                <div className="flex gap-2 items-center">
                  <VscGithubAction />
                  <a
                    href="https://github.com/Quadrial/Space-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Countries SwiperSlides */}
          <SwiperSlide>
            <div className="border rounded-lg">
              <div className="flex flex-col items-center gap-[13px]">
                {/* Embed the live preview in an iframe */}
                <iframe
                  src="https://restcountriesapi-bice.vercel.app/"
                  title="Doctor Appointment Preview"
                  className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h4 className="">
                    REST Countries API with color theme switcher
                  </h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 font-[400]">
                Is a user-friendly web design that simplifies the process of
                booking appointments with doctors. It allows patients to easily
                access medical professionals, view their availability, and
                schedule appointments at their convenience.
              </p>
              <div className="mt- flex gap-2">
                <p className="font-bold">Toolkit: </p>
                <p>HTML, React, Tailwind CSS</p>
              </div>
              <div className="mt- font-semibold flex gap-10 underline">
                <div className="flex gap-2 items-center">
                  <RxExternalLink />
                  <a
                    href="https://restcountriesapi-bice.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live preview
                  </a>
                </div>

                <div className="flex gap-2 items-center">
                  <VscGithubAction />
                  <a
                    href="https://github.com/Quadrial/Rest-countries-API-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Address SwiperSlides */}
          <SwiperSlide>
            <div className="border rounded-lg">
              <div className="flex flex-col items-center gap-[13px]">
                {/* Embed the live preview in an iframe */}
                <iframe
                  src="https://ip-address-cyan.vercel.app/"
                  title="Doctor Appointment Preview"
                  className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h4 className="">IP Address Tracker</h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 font-[400]">
                Is a user-friendly web design that simplifies the process of
                booking appointments with doctors. It allows patients to easily
                access medical professionals, view their availability, and
                schedule appointments at their convenience.
              </p>
              <div className="mt- flex gap-2">
                <p className="font-bold">Toolkit: </p>
                <p>HTML, React, Tailwind CSS</p>
              </div>
              <div className="mt- font-semibold flex gap-10 underline">
                <div className="flex gap-2 items-center">
                  <RxExternalLink />
                  <a
                    href="https://ip-address-cyan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live preview
                  </a>
                </div>

                <div className="flex gap-2 items-center">
                  <VscGithubAction />
                  <a
                    href="https://github.com/Quadrial/Ip-Address"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg">
              <div className="flex flex-col items-center gap-[13px]">
                {/* Embed the live preview in an iframe */}
                <iframe
                  src="https://doctor-appointment-frontend-topaz.vercel.app/"
                  title="Doctor Appointment Preview"
                  className="w-full h-[200px] md:h-[300px] rounded-[20px] overflow-hidden"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h4 className="">Doctor Appointment Landingpage</h4>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 font-[400]">
                Is a user-friendly web design that simplifies the process of
                booking appointments with doctors. It allows patients to easily
                access medical professionals, view their availability, and
                schedule appointments at their convenience.
              </p>
              <div className="mt-5 flex gap-2">
                <p className="font-bold">Toolkit: </p>
                <p>HTML, React, Tailwind CSS</p>
              </div>
              <div className="mt-5 font-semibold flex gap-10 underline">
                <div className="flex gap-2 items-center">
                  <RxExternalLink />
                  <a
                    href="https://doctor-appointment-frontend-topaz.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live preview
                  </a>
                </div>

                <div className="flex gap-2 items-center">
                  <VscGithubAction />
                  <a
                    href="https://github.com/Quadrial/Doctor-Appointment-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Additional SwiperSlides */}
        </Swiper>
      </div>
    </section>
  );
};

export default Works;
