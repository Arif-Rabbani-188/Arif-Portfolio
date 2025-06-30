import { useState } from "react";
import Navbar from "./Navbar";
import { IoMdPaper } from "react-icons/io";
import TypewriterComponent from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const name = "KHAN MAHMUD ARIF RABBANI";

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden shadow-2xl bg-gradient-to-r from-teal-400 via-blue-400 to-emerald-500 py-16 px-5 md:px-48 flex flex-col-reverse md:flex-row items-center gap-5 justify-between">
        {/* Decorative SVGs */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="650" cy="100" r="80" fill="#fff" />
          <circle cx="150" cy="300" r="60" fill="#fff" />
          <rect
            x="400"
            y="50"
            width="60"
            height="60"
            rx="15"
            fill="#fff"
            opacity="0.7"
          />
          <ellipse
            cx="700"
            cy="350"
            rx="30"
            ry="15"
            fill="#fff"
            opacity="0.5"
          />
        </svg>
        {/* Left: Description */}
        <div className="relative z-10 flex-1 flex flex-col items-start md:items-start text-left">
          <h1 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-white to-teal-200 drop-shadow-lg tracking-tight">
            <span className="inline-block px-2 py-1 text-center text-4xl md:text-5xl rounded-lg">
              {/* <TypewriterComponent
                options={{
                  strings: [name, "Web Developer", "Tech Enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
              <Typewriter
                words={[name]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}>

              </Typewriter>
            </span>
          </h1>
          <p className="text-xl mb-4 opacity-95 font-semibold flex items-center gap-2 text-white tracking-wide">
            Hi! I'm a{" "}
            <span className="text-orange-300 font-bold">
              Creative Web Developer
            </span>
            <span className="text-2xl hidden md:block">💡</span>
          </p>
          <p className="mb-6 text-white/90 max-w-md text-lg leading-relaxed">
            I love building{" "}
            <span className="font-bold text-teal-100">beautiful</span>,{" "}
            <span className="font-bold text-blue-100">interactive</span>, and{" "}
            <span className="font-bold text-emerald-100">performant</span> web
            experiences.
            <br />
            My passion is to turn ideas into reality using modern web
            technologies.
            <br />
            <span className="italic text-yellow-100">
              Let's create something amazing together!
            </span>
          </p>
          <a
            href="/Arif_Resume.pdf"
            target="_blank"
            className="flex items-center gap-3 bg-gradient-to-r from-orange-300 via-yellow-200 to-teal-200 text-gray-900 px-10 py-3 rounded-full font-bold shadow-lg hover:bg-orange-400 transition transform hover:scale-105 text-lg tracking-wide border-2 border-white/30"
          >
            Download Resume <IoMdPaper size={30} />
          </a>
        </div>
        {/* Right: Picture */}
        <div className="relative z-10 flex-1 flex justify-center md:justify-end md:mt-0">
          <div className="w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-2xl border-8 border-white/40 shadow-xl overflow-hidden bg-white/20 flex items-center justify-center">
            <img
              src="https://i.ibb.co/mrBVKvd3/IMG-7459-Original.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
