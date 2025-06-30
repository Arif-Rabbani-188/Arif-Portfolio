import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiVercel, SiPostman, SiNpm, SiAxios, SiSocketdotio } from 'react-icons/si';

const skillList = [
    { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
    { name: 'REST APIs', icon: <SiVercel className="text-black" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black" /> },
    { name: 'Axios', icon: <SiAxios className="text-orange-500" /> },
    { name: 'NPM', icon: <SiNpm className="text-red-600" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
];

const Skills = () => {
    return (
        <section className="bg-slate-50 rounded-2xl md:p-8 w-full mx-auto shadow-lg overflow-hidden py-32 items-center justify-center">
            <div className="flex items-center justify-center mb-8">
                <span className="block w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mr-4"></span>
                <h2 className="text-center text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600 tracking-wide uppercase drop-shadow-lg">
                    Skills
                </h2>
                <span className="block w-16 h-1 bg-gradient-to-l from-sky-400 to-purple-500 rounded-full ml-4"></span>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-3 md:gap-8">
                {skillList.map((skill, idx) => (
                    <div
                        key={skill.name + idx}
                        className="flex flex-col items-center bg-white rounded-2xl shadow-xl justify-center border border-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 w-[88px] h-[90px]  md:w-[160px] md:h-[180px] text-center text-slate-700 hover:text-sky-600"
                    >
                        <span className="text-2xl md:text-5xl mb-4 drop-shadow-lg">{skill.icon}</span>
                        <span className="text-sm md:text-lg font-bold text-slate-800 tracking-wide">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
