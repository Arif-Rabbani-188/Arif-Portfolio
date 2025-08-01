import { useState } from "react";
import Navbar from "./Navbar";
import { IoMdPaper } from "react-icons/io";
import TypewriterComponent from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
    const name = "KHAN MAHMUD ARIF RABBANI";

    return (
        <div>
            <div className="relative overflow-hidden shadow-2xl bg-gradient-to-r from-[#0a2342] via-[#193660] to-[#2e3a59] py-10 px-3 md:py-16 md:px-12 lg:px-32 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-5 justify-between">
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
                {/* Left: Description with creative enhancements */}
                <motion.div
                    className="relative z-10 flex-1 flex flex-col items-start text-left"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-2xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 drop-shadow-lg tracking-tight">
                        <span className="inline-block px-2 py-1 text-center rounded-lg">
                            <Typewriter
                                words={[name]}
                                loop={1}
                                cursor
                                cursorStyle="_"
                                typeSpeed={400}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                    {/* Animated sparkle effect */}
                    <motion.div
                        className="mb-2 text-base md:text-lg font-semibold text-blue-100"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                    >
                        <TypewriterComponent
                            options={{
                                strings: [
                                    "--React Enthusiast--",
                                    "--Performance Optimizer--",
                                    "--Problem Solver--",
                                    "--MERN Stack Developer--",
                                    "--MongoDB Architect--",
                                    "--Express.js Backend Builder--",
                                    "--Node.js API Creator--"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 60,
                                pauseFor: 2000,
                            }}
                        />
                    </motion.div>
                    <motion.p
                        className="mb-6 text-white/90 max-w-md text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        I love building{" "}
                        <span className="font-bold text-blue-200">beautiful</span>,{" "}
                        <span className="font-bold text-white">interactive</span>, and{" "}
                        <span className="font-bold text-blue-100">performant</span> web
                        experiences.
                        <br />
                        My expertise includes the full MERN stack:{" "}
                        <span className="font-bold text-blue-200">MongoDB</span>,{" "}
                        <span className="font-bold text-white">Express.js</span>,{" "}
                        <span className="font-bold text-blue-300">React</span>, and{" "}
                        <span className="font-bold text-blue-100">Node.js</span>.
                        <br />
                        My passion is to turn ideas into reality using modern web
                        technologies.
                        <br />
                        <span className="italic text-white/80">
                            Let's create something amazing together!
                        </span>
                    </motion.p>
                    <motion.a
                        href="/Arif_Resume.pdf"
                        target="_blank"
                        className="flex items-center gap-3 bg-gradient-to-r from-white via-blue-100 to-blue-300 text-[#0a2342] px-6 md:px-10 py-2 md:py-3 rounded-full font-bold shadow-lg hover:bg-blue-200 transition transform hover:scale-105 text-base md:text-lg tracking-wide border-2 border-white/30"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        Download Resume <IoMdPaper size={24} />
                    </motion.a>
                    {/* Decorative floating shapes */}
                    <motion.div
                        className="absolute -top-8 -left-8"
                        initial={{ opacity: 0, y: -20, rotate: -10 }}
                        animate={{ opacity: 0.7, y: 0, rotate: 0 }}
                        transition={{ delay: 1.5, duration: 1.2, type: "spring" }}
                    >
                        <svg width="48" height="48" fill="none">
                            <circle cx="24" cy="24" r="20" fill="#fff" fillOpacity="0.15" />
                            <rect x="10" y="10" width="10" height="10" rx="2" fill="#fff" fillOpacity="0.2" />
                        </svg>
                    </motion.div>
                </motion.div>
                {/* Right: Picture */}
                <motion.div
                    className="relative z-10 flex-1 flex justify-center md:justify-end md:mt-0 mb-8 md:mb-0"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        className="w-96 lg:h-[600px] lg:w-[600px] h-96 rounded-2xl border-8 border-white/40 shadow-xl overflow-hidden bg-white/20 flex items-center justify-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1, type: "spring" }}
                    >
                        <img
                            src="https://i.ibb.co/mrBVKvd3/IMG-7459-Original.png"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
