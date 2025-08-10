import React from 'react';
import SectionHeading from './SectionHeading';

const AboutMe = () => {
    return (
        <section
            id="about"
            className="scroll-mt-24 bg-white rounded-2xl shadow md:shadow-lg w-full px-5 sm:px-8 md:px-14 py-10 md:py-14"
        >
            <SectionHeading title="About Me" subtitle="Thoughtful builder. Curious learner. Human first." />

            {/* Narrative blocks */}
            <div className="space-y-6 text-slate-700 leading-relaxed text-[15px] md:text-lg">
                <p>
                    My journey into programming didn&apos;t start with a textbook—it started with
                    curiosity. I wanted to know <span className="font-semibold">why things worked</span>.
                    Physics gave me a habit of modeling complex systems. Code gave me a fast feedback loop.
                    The moment I built a tiny component and watched state flow through it, I knew I could
                    turn ideas into something people could actually use.
                </p>
                <p>
                    I began by assembling small UIs, then evolved into crafting full <span className="font-semibold text-emerald-600">MERN stack</span> apps—
                    thinking in data shapes, designing API boundaries, and refining the subtle interactions
                    that make a product feel intentional. Lately I&apos;m layering in <span className="font-semibold text-emerald-600">Python + ML</span> fundamentals:
                    rebuilding linear algebra intuition, experimenting with model behavior, and asking
                    better questions about performance and bias.
                </p>
                <p>
                    The work I enjoy most lives at the intersection of <span className="font-semibold">clean architecture</span>,
                    <span className="font-semibold"> usable interfaces</span>, and <span className="font-semibold">measurable impact</span>. I like:
                </p>
                <ul className="list-disc ml-6 space-y-1 text-[15px] md:text-[17px]">
                    <li>Designing APIs & data flows that stay flexible as features grow</li>
                    <li>Improving perceived performance with smart loading + skeletons</li>
                    <li>Untangling messy components into composable patterns</li>
                    <li>Making UI states (error / empty / loading) feel deliberate</li>
                </ul>
                <p className="bg-gradient-to-r from-sky-50 to-emerald-50 border border-slate-200 rounded-xl p-4 md:p-5 text-slate-800 shadow-sm">
                    <span className="font-semibold text-sky-700">Core mindset:</span> If I can reveal
                    the underlying rule, I can redesign the experience to feel lighter for the next
                    person using it.
                </p>
                <p>
                    Personality wise: I&apos;m calm under ambiguity, persistent with tricky bugs, generous in
                    code reviews, and I like shipping things that make someone say, <span className="italic">“Whoa, that felt smoother than I expected.”</span>
                </p>
                <p>
                    While I don&apos;t yet have formal professional job experience, I make up for it with a <span className="font-semibold">fast learning loop</span> and
                    disciplined practice. Every project in this portfolio was an intentional challenge: new patterns, deeper data flow design,
                    or performance constraints I hadn&apos;t solved before. I document what I learn, refactor aggressively, and move to the next
                    layer—so I ramp quickly when dropped into a real codebase.
                </p>
            </div>

            {/* Snapshot cards */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm md:text-base">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-1">Current Focus</h4>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>API performance & caching</li>
                        <li>MongoDB schema design</li>
                        <li>Accessible React patterns</li>
                        <li>ML building blocks</li>
                    </ul>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-1">Values</h4>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>Clarity over cleverness</li>
                        <li>Iteration over perfection</li>
                        <li>Empathy over ego</li>
                        <li>Consistency over noise</li>
                    </ul>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-1">Toolbox</h4>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>MERN + REST</li>
                        <li>JWT / Auth flows</li>
                        <li>State modeling</li>
                        <li>Python notebooks</li>
                    </ul>
                </div>
            </div>

            <p className="mt-10 text-center text-sm md:text-base text-slate-500">
                Always exploring. Always refining. Still excited by the next small improvement.
            </p>
        </section>
    );
};

export default AboutMe;
