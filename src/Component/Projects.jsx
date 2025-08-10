import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

const Projects = () => {
    const truncate = (text, max = 120) => {
        if (!text) return '';
        return text.length > max ? text.slice(0, max).trimEnd() + '…' : text;
    };
    return (
    <section id="projects" className="py-8 px-4 bg-gradient-to-br from-teal-50 via-white to-green-100 scroll-mt-24">
            <SectionHeading title="My Projects" subtitle="Selected builds & learning milestones" />
            <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
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
                            <p className="text-gray-600 text-base mb-4 min-h-[56px]">
                                {truncate(project.description, 140)}
                            </p>
                            <Link
                                to={`/projects/${project.slug}`}
                                className="inline-block mb-2 text-sm font-semibold tracking-wide bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-transparent bg-clip-text hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                                aria-label={`View full details of ${project.title}`}
                            >
                                View Full Details →
                            </Link>
                            <div className="mt-auto" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;