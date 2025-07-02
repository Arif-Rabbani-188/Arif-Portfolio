import React from 'react';

const AboutMe = () => {
    return (
        <section className="p-4 sm:p-8 md:p-10 bg-white rounded-2xl shadow-xl py-12">
            <div className="flex items-center justify-center mb-8">
                <span className="block w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mr-4"></span>
                <h2 className="text-center text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600 tracking-wide uppercase drop-shadow-lg">
                    About Me
                </h2>
                <span className="block w-16 h-1 bg-gradient-to-l from-sky-400 to-purple-500 rounded-full ml-4"></span>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Hello! I’m <span className="font-semibold text-blue-700">Khan Mahmud Arif Rabbani</span>, a curious mind at the intersection of science and technology. As a <span className="font-semibold text-blue-800">Physics student at the University of Rajshahi</span>, I thrive on unraveling the mysteries of the universe—whether it’s quantum mechanics or the elegance of a well-written algorithm.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                When I’m not exploring the laws of nature, I’m channeling my creativity as a <span className="text-blue-800 font-semibold">MERN stack developer</span>. I love transforming complex ideas into interactive, user-friendly web applications—blending logic, design, and a touch of scientific curiosity. My projects are where code meets creativity, and every bug is just another puzzle waiting to be solved!
            </p>
            <div className="flex items-center my-6">
                <span className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500 mr-3"></span>
                <span className="text-blue-600 font-semibold">Physics fuels my logic. Code powers my creativity.</span>
            </div>
            <h3 className="mt-8 text-lg sm:text-xl font-semibold text-blue-800">Personality &amp; Goals</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-2">
                Driven by curiosity and a passion for discovery, I enjoy collaborating with others to build solutions that matter. My goal is to bridge the gap between science and technology—creating digital experiences that are as intuitive as they are innovative. I believe in lifelong learning, teamwork, and the magic that happens when diverse ideas collide.
            </p>
            
        </section>
    );
};

export default AboutMe;
