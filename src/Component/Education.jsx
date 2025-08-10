import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { educationItems } from '../data/education';

const Education = () => {
    return (
            <section
                id="education"
                className="scroll-mt-24 py-16 px-5 sm:px-8 md:px-14 bg-white"
            >
                <SectionHeading title="Education" subtitle="Academic path & foundational learning" />

                <div className="mt-12 w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                    {educationItems.map((edu) => (
                        <Link
                            to={`/education/${edu.slug}`}
                            key={edu.slug}
                            className="relative group rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-white to-slate-50 shadow-sm hover:shadow-xl hover:border-emerald-200 transition overflow-hidden focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400" />
                            <div className="p-6 md:p-7 flex flex-col h-full">
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    <span className="inline-block text-[11px] uppercase tracking-wide font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">{edu.period}</span>
                                    {edu.highlight && (
                                        <span className="text-[11px] font-medium text-emerald-600 bg-white border border-emerald-200 px-2 py-0.5 rounded-full">
                                            {edu.highlight}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-slate-800 leading-snug">
                                    {edu.degree}
                                </h3>
                                <p className="mt-1 text-sm md:text-[15px]">
                                    <span className="inline-block font-semibold tracking-wide bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-transparent bg-clip-text drop-shadow-sm">
                                        {edu.institution}
                                    </span>
                                </p>
                <ul className="mt-4 space-y-1.5 text-slate-600 text-sm md:text-[15px] flex-1">
                                    {edu.details.map((d) => (
                                        <li key={d} className="flex gap-2 items-start">
                                            <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Growth Phase
                                </div>
                            </div>
            </Link>
                    ))}
                </div>
        </section>
    );
};

export default Education;
