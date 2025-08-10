import React from "react";
import SectionHeading from './SectionHeading';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiNpm,
  SiAxios,
  SiDaisyui,
  SiC,
  SiFortran,
  SiPython,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Define skill cards with accent color classes for consistent theming
const skillList = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    points: [
      "Semantic layout",
      "Accessible structure",
      "SEO meta",
      "Forms & validation",
      "Media embedding"
    ],
    accent: "from-orange-400 to-amber-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    points: [
      "Flexbox & Grid",
      "Responsive design",
      "Animations",
      "Custom properties",
      "Accessibility states"
    ],
    accent: "from-sky-400 to-blue-600",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    points: [
      "ES6+ features",
      "Async / Promises",
      "Array methods",
      "Error handling",
      "DOM profiling"
    ],
    accent: "from-yellow-300 to-amber-500",
  },
  {
    name: "Python",
    icon: <SiPython className="text-blue-500" />,
    points: [
      "Scripting",
      "Data handling",
      "Pandas basics",
      "Virtual envs",
      "CLI tooling"
    ],
    accent: "from-yellow-300 to-blue-600",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-sky-400" />,
    points: [
      "Hooks & Context",
      "Component patterns",
      "State modeling",
      "Lazy loading",
      "Error boundaries"
    ],
    accent: "from-cyan-400 to-sky-600",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    points: [
      "Utility-first",
      "Design consistency",
      "Responsive stacks",
      "Dark mode",
      "Design tokens"
    ],
    accent: "from-teal-300 to-cyan-500",
  },
  {
    name: "DaisyUI",
    icon: <SiDaisyui className="text-purple-500" />,
    points: [
      "Ready components",
      "Theming support",
      "Variant usage",
      "Accessible patterns",
      "Rapid prototyping"
    ],
    accent: "from-fuchsia-400 to-purple-600",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
    points: [
      "Event-driven",
      "Scalable APIs",
      "Stream handling",
      "Process mgmt",
      "Perf profiling"
    ],
    accent: "from-emerald-400 to-green-600",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700" />,
    points: [
      "Middleware design",
      "REST routing",
      "Error layers",
      "Security headers",
      "Rate limiting"
    ],
    accent: "from-gray-300 to-gray-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-700" />,
    points: [
      "Schema design",
      "Aggregation",
      "Indexes",
      "Data modeling",
      "Query tuning"
    ],
    accent: "from-green-400 to-lime-600",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-600" />,
    points: [
      "State normalization",
      "Toolkit usage",
      "RTK Query",
      "Memo selectors",
      "Immutable patterns"
    ],
    accent: "from-violet-400 to-purple-700",
  },
  {
    name: "REST / Deploy",
    icon: <SiVercel className="text-black" />,
    points: [
      "API design",
      "Vercel deploy",
      "Env config",
      "Monitoring",
      "Caching basics"
    ],
    accent: "from-zinc-300 to-zinc-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
    points: [
      "Branch strategy",
      "Code history",
      "Conflict resolution",
      "Rebase & squash",
      "Hooks usage"
    ],
    accent: "from-orange-400 to-red-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-black" />,
    points: [
      "PR workflow",
      "CI basics",
      "Issue templates",
      "Actions setup",
      "Code reviews"
    ],
    accent: "from-slate-400 to-slate-600",
  },
  {
    name: "Axios",
    icon: <SiAxios className="text-orange-500" />,
    points: [
      "Interceptors",
      "Error handling",
      "Retry logic",
      "Cancel tokens",
      "Global config"
    ],
    accent: "from-amber-300 to-orange-500",
  },
  {
    name: "NPM",
    icon: <SiNpm className="text-red-600" />,
    points: [
      "Script tooling",
      "Dependency mgmt",
      "Version ranges",
      "Audits & fixes",
      "Workspaces"
    ],
    accent: "from-rose-400 to-red-600",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-pink-500" />,
    points: [
      "Wireframes",
      "Design handoff",
      "Auto layout",
      "Components",
      "Prototypes"
    ],
    accent: "from-pink-400 to-fuchsia-600",
  },
  {
    name: "VSCode",
    icon: <VscVscode className="text-blue-600" />,
    points: [
      "Debug configs",
      "Extensions",
      "Multi-root",
      "Tasks & launch",
      "Settings sync"
    ],
    accent: "from-indigo-400 to-blue-600",
  },
  {
    name: "C",
    icon: <SiC className="text-slate-700" />,
    points: [
      "Low-level logic",
      "Memory awareness",
      "Pointers",
      "Struct design",
      "Debugging"
    ],
    accent: "from-slate-300 to-slate-500",
  },
  {
    name: "Fortran",
    icon: <SiFortran className="text-indigo-600" />,
    points: [
      "Scientific calc",
      "Array ops",
      "Numerics",
      "Loop perf",
      "Legacy interop"
    ],
    accent: "from-indigo-400 to-indigo-700",
  },
  {
    name: "Linux",
    icon: <FcLinux className="" />,
    points: [
      "CLI workflows",
      "Shell scripting",
      "Process mgmt",
      "Permissions",
      "Package tools"
    ],
    accent: "from-emerald-300 to-teal-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-50 rounded-2xl md:p-8 w-full mx-auto shadow-lg overflow-hidden py-5 md:py-8 items-center justify-center scroll-mt-24"
    >
  <SectionHeading title="Skills" subtitle="Core technologies & tools I use" />
      <div className="w-full flex flex-wrap justify-center gap-5 md:gap-8 py-10">
        {skillList.map((skill, i) => (
          <div key={skill.name} className="relative">
            <div
              className={`bg-gradient-to-br ${skill.accent} p-[1px] rounded-2xl shadow-lg shadow-slate-200/60 hover:shadow-xl hover:shadow-slate-300/60 transition-all duration-300 group`}
            >
              <div className="flex flex-col items-center bg-white rounded-2xl w-36 xs:w-40 sm:w-44 md:w-52 text-center text-slate-700 px-3 py-4 md:px-5 md:py-6 relative overflow-hidden">
                {/* subtle decorative gradient blur */}
                <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition" />
                <span className="text-4xl md:text-6xl drop-shadow-sm scale-90 group-hover:scale-100 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="text-[11px] md:text-base font-extrabold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 group-hover:from-slate-900 group-hover:to-slate-600 transition mt-1 md:mt-2 mb-1">
                  {skill.name}
                </span>
                <div className="w-full pt-1 md:pt-2 mt-1 md:mt-2 border-t border-slate-100">
                  <ul className="text-left w-full space-y-0.5 md:space-y-1 text-[10px] md:text-sm leading-tight text-slate-600 font-medium">
                    {skill.points.map((p) => (
                      <li key={p} className="flex items-start gap-1">
                        <span className="mt-[3px] block w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow" />
                        <span className="flex-1">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Animated underline accent */}
                <div
                  className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${skill.accent} transition-all duration-500 rounded-t-2xl`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
