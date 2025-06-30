import React from 'react';

const projects = [
    {
        title: "PackNShip",
        image: "https://i.ibb.co/r2rZxDDq/Screenshot-from-2025-06-30-17-14-39.png",
        liveLink: "https://picknship-2f8cb.web.app/",
        github: "https://github.com/Arif-Rabbani-188/PackNShip-client-side",
        server: "https://github.com/Arif-Rabbani-188/PackNShip-server-side",
        description: "Developed a responsive full-stack B2B platform using React, Tailwind CSS (DaisyUI), and Express.js. Integrated Firebase authentication with private routes and stored cart data in MongoDB. Focused on clean UI, secure access, and smooth user experience."
    },
    {
        title: "RoomMateMe",
        image: "https://i.ibb.co/HT1mZ4j7/Screenshot-from-2025-06-30-17-15-22.png",
        liveLink: "https://roommateme-18b2b.web.app/home",
        github: "https://github.com/Arif-Rabbani-188/RoomMateMe-client-side",
        server: "https://github.com/Arif-Rabbani-188/RoomMateMe-server-side",
        description: "Developed a responsive full-stack B2B platform using React, Tailwind CSS (DaisyUI), and Express.js. Integrated Firebase authentication with private routes and stored cart data in MongoDB. Focused on clean UI, secure access, and smooth user experience."
    },
    {
        title: "FestScopeBD",
        image: "https://i.ibb.co/twFhtcFf/Screenshot-from-2025-06-30-18-08-09.png",
        liveLink: "https://festscopbd.web.app/",
        github: "https://github.com/Arif-Rabbani-188/FestScopeBD",
        description: "A responsive React-based web app that helps users discover nearby events and festivals. Features include event listings location and date, and a mobile-first UI for seamless browsing across devices."
    }
];

const Projects = () => {
    return (
        <section className="py-16 min-h-screen px-4 bg-gradient-to-br from-teal-50 via-white to-green-100">
            <div className="flex items-center justify-center mb-8">
                <span className="block w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mr-4"></span>
                <h2 className="text-center text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600 tracking-wide uppercase drop-shadow-lg">
                    My Projects
                </h2>
                <span className="block w-16 h-1 bg-gradient-to-l from-sky-400 to-purple-500 rounded-full ml-4"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full flex flex-col overflow-hidden hover:shadow-green-200 transition-all duration-300 group"
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-7 flex flex-col flex-1">
                            <h3 className="mb-2 text-2xl font-bold text-gray-800 tracking-tight group-hover:text-green-600 transition">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-base mb-6 min-h-[56px]">
                                {project.description}
                            </p>
                            <div className="flex flex-col gap-4 mt-auto sm:flex-row">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center bg-gradient-to-r from-green-400 to-teal-400 text-white px-5 py-2 rounded-lg font-semibold text-base shadow hover:from-green-500 hover:to-teal-500 transition"
                                >
                                    Live Site
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1  text-center bg-gradient-to-r from-gray-800 to-gray-600 text-white px-5 py-2 rounded-lg font-semibold text-base shadow hover:from-gray-900 hover:to-gray-700 transition"
                                >
                                    Client side
                                </a>
                                {
                                    project.server && (
                                        <a
                                    href={project.server || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center bg-gradient-to-r from-blue-500 to-blue-400 text-white px-5 py-2 rounded-lg font-semibold text-base shadow hover:from-blue-600 hover:to-blue-500 transition"
                                >
                                    Server Side
                                </a>)
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;