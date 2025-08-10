import { useParams, Link } from 'react-router-dom';
import { findEducation } from '../data/education';
import SectionHeading from '../Component/SectionHeading';
import { useState } from 'react';
import MERNLogo from '../Component/MERNLogo';

export default function EducationDetail() {
  const { slug } = useParams();
  const edu = findEducation(slug);
  const [openYears, setOpenYears] = useState(() => {
    if (!edu?.curriculum) return {};
    return edu.curriculum.reduce((acc, y, idx) => { acc[y.yearLabel] = idx === 0; return acc; }, {});
  });

  const toggleYear = (label) => setOpenYears(o => ({ ...o, [label]: !o[label] }));

  if (!edu) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-2xl font-semibold mb-4">Education record not found</p>
        <Link to="/" className="text-emerald-400 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50 text-slate-700 pb-32">
      <nav className="sticky top-0 backdrop-blur bg-white/80 supports-[backdrop-filter]:bg-white/70 border-b border-slate-200 z-30 py-3 shadow-sm">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <Link
              to="/#education"
              className="flex items-center text-xs font-semibold tracking-wide text-emerald-700 hover:text-teal-600 px-2 py-1 rounded-md hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition"
              aria-label="Back to Education"
            >
              <span className="text-base leading-none">←</span>
            </Link>
            <Link to="/" className="font-bold text-lg tracking-wide bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-transparent bg-clip-text"><MERNLogo /></Link>
          </div>
          <Link to="/#education" className="text-sm px-3 py-1.5 rounded-md bg-slate-100 hover:bg-white border border-slate-200 shadow-sm transition">All Education</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-5 pt-12">
        <SectionHeading title={edu.degree} />
        <p className="-mt-6 mb-8 text-center font-semibold tracking-wide text-sm md:text-base">
          <span className="inline-block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-transparent bg-clip-text drop-shadow-sm">
            {edu.institution}
          </span>
        </p>
        {edu.image && (
          <div className="mt-8 relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition" />
            <img
              src={edu.image}
              alt={edu.institution}
              className="w-full h-60 md:h-72 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 flex items-end justify-between bg-gradient-to-t from-slate-900/55 via-slate-900/0 to-transparent">
              <p className="text-white text-sm md:text-base font-medium drop-shadow-sm tracking-wide flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Campus Snapshot
              </p>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-semibold text-white/80 bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm border border-white/20">{edu.period}</span>
            </div>
          </div>
        )}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl shadow-md shadow-emerald-100/50 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400" />
          <div className="p-6 md:p-8 space-y-8">
            <div className="flex flex-wrap gap-3 items-center text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold tracking-wide text-emerald-700 uppercase">{edu.period}</span>
              {edu.highlight && <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">{edu.highlight}</span>}
            </div>
            {edu.overview && (
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{edu.overview}</p>
            )}
            {edu.details?.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-800 mb-2">Key Areas</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {edu.details.map(d => <li key={d}>{d}</li>)}
                </ul>
              </div>
            )}
            {edu.focusAreas?.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-800 mb-2">Focus Areas</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {edu.focusAreas.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            )}
            {edu.achievements?.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-800 mb-2">Achievements</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {edu.achievements.map(a => <li key={a}>{a}</li>)}
                </ul>
              </div>
            )}
            {edu.future?.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-800 mb-2">Future Plans</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {edu.future.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            )}
            <div className="pt-4">
              <Link to="/#education" className="text-xs tracking-wide uppercase font-semibold text-emerald-600 hover:text-teal-600 transition">← Back to Education</Link>
            </div>
          </div>
        </div>
        {edu.curriculum && (
          <div className="mt-14 space-y-6">
            <h2 className="text-lg font-semibold tracking-wide text-emerald-700">Detailed Course Distribution</h2>
            {edu.curriculum.map(year => {
              const open = openYears[year.yearLabel];
              return (
                <div key={year.yearLabel} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
                  <button
                    onClick={() => toggleYear(year.yearLabel)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
                  >
                    <div>
                      <p className="font-semibold text-slate-800">{year.yearLabel}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Total Marks: {year.totalMarks} • TCP: {year.tcp}</p>
                    </div>
                    <span className={`text-emerald-600 text-sm transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  {open && (
                    <div className="px-5 pb-6 pt-2">
                      {year.notes && <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">{year.notes}</p>}
                      <div className="overflow-x-auto rounded-lg ring-1 ring-slate-200">
                        <table className="min-w-full text-xs md:text-sm text-slate-600">
                          <thead className="bg-slate-100 text-slate-700 uppercase text-[10px] md:text-[11px] tracking-wide">
                            <tr>
                              <th className="px-3 py-2 text-left font-medium">Course</th>
                              <th className="px-3 py-2 text-left font-medium">Title</th>
                              <th className="px-3 py-2 text-left font-medium">Marks</th>
                              <th className="px-3 py-2 text-left font-medium">Status</th>
                              <th className="px-3 py-2 text-left font-medium">Duration</th>
                              <th className="px-3 py-2 text-left font-medium">CP</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {year.courses.map(c => (
                              <tr key={c.no} className="hover:bg-slate-50">
                                <td className="px-3 py-2 font-medium text-emerald-600 whitespace-nowrap">{c.no}</td>
                                <td className="px-3 py-2 min-w-[180px]">{c.title}</td>
                                <td className="px-3 py-2">{c.marks}</td>
                                <td className="px-3 py-2">{c.status}</td>
                                <td className="px-3 py-2">{c.duration}</td>
                                <td className="px-3 py-2">{c.cp}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
