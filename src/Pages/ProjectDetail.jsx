import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { findProject } from '../data/projects';
import SectionHeading from '../Component/SectionHeading';
import MERNLogo from '../Component/MERNLogo';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = findProject(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-2xl font-semibold mb-4">Project not found</p>
        <Link to="/" className="text-indigo-400 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50 text-slate-700 pb-24">
      <nav className="sticky top-0 backdrop-blur bg-white/80 supports-[backdrop-filter]:bg-white/70 border-b border-slate-200 z-30 py-3 shadow-sm">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <Link
              to="/#projects"
              className="flex items-center text-xs font-semibold tracking-wide text-emerald-700 hover:text-teal-600 px-2 py-1 rounded-md hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition"
              aria-label="Back to Projects"
            >
              <span className="text-base leading-none">←</span>
            </Link>
            <Link to="/" className="font-bold text-lg tracking-wide bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-transparent bg-clip-text"><MERNLogo /></Link>
          </div>
          <Link to="/" className="text-sm px-3 py-1.5 rounded-md bg-slate-100 hover:bg-white border border-slate-200 shadow-sm transition">Home</Link>
        </div>
      </nav>
  <div className="w-11/12 max-w-5xl mx-auto pt-10">
        <SectionHeading title={project.title} subtitle={project.description} />
        <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="relative group rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg shadow-emerald-100/60 bg-white">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-emerald-600/10 via-transparent to-teal-600/10" />
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.details?.tech?.map(t => (
                <span key={t} className="text-xs tracking-wide px-2 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {project.details?.summary}
            </p>
            {project.details?.features && (
              <div>
                <h3 className="font-semibold text-slate-800 mb-2 text-xs uppercase tracking-wide">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {project.details.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            )}
            {project.details?.challenges && (
              <div>
                <h3 className="font-semibold text-slate-800 mb-2 text-xs uppercase tracking-wide">Challenges Faced</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {project.details.challenges.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
            )}
            {project.details?.improvements && (
              <div>
                <h3 className="font-semibold text-slate-800 mb-2 text-xs uppercase tracking-wide">Potential Improvements & Future Plans</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {project.details.improvements.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-white font-medium shadow hover:shadow-md hover:brightness-105 transition"
                  aria-label="Open live site in new tab"
                >
                  Live Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-md bg-slate-100 text-slate-700 border border-slate-200 hover:bg-white hover:border-emerald-300 transition"
                  aria-label="Open client repository in new tab"
                >
                  GitHub (Client)
                </a>
              )}
              {project.server && (
                <a
                  href={project.server}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-md bg-slate-100 text-slate-700 border border-slate-200 hover:bg-white hover:border-emerald-300 transition"
                  aria-label="Open server repository in new tab"
                >
                  GitHub (Server)
                </a>
              )}
            </div>
            <Link to="/#projects" className="inline-block text-xs tracking-wide uppercase font-semibold text-emerald-600 hover:text-teal-600 transition pt-4">← Back to Projects</Link>
          </div>
        </div>
      </div>
      {project.liveLink && (
        <div className="mt-20 md:mt-24 w-full px-0 lg:px-5">
          <LivePreview url={project.liveLink} full />
        </div>
      )}
    </div>
  );
}

function LivePreview({ url, full }) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  return (
  <div className={`${full ? 'w-full' : 'mt-16 mx-auto'}`} aria-label="Live preview of project">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base md:text-lg font-semibold tracking-wide text-emerald-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Preview
        </h2>
        <button
          onClick={() => setOpen(o => !o)}
          className="text-xs font-medium px-3 py-1.5 rounded-md border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-white transition"
          aria-expanded={open}
        >
          {open ? 'Hide' : 'Show'}
        </button>
      </div>
      {open && (
        <div className="rounded-none md:rounded-2xl border border-slate-200 shadow-lg bg-gradient-to-br from-white to-slate-50 overflow-hidden" role="region">
          <div className="h-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 flex items-center gap-1 px-3 select-none">
            <span className="w-2 h-2 rounded-full bg-rose-300" />
            <span className="w-2 h-2 rounded-full bg-amber-300" />
            <span className="w-2 h-2 rounded-full bg-emerald-300" />
            <p className="ml-3 text-[11px] font-medium text-white/90 truncate">{url}</p>
          </div>
          <div className="relative">
            {loading && !failed && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500 text-sm bg-white">
                <div className="w-8 h-8 border-2 border-emerald-500/40 border-t-emerald-500 rounded-full animate-spin" />
                <p>Loading live preview…</p>
                <p className="text-[11px] text-slate-400">If it doesn’t load the site may block embedding.</p>
              </div>
            )}
            {failed && (
              <div className="p-10 text-center text-sm text-slate-600">
                <p className="font-medium mb-2">Preview blocked by site security headers.</p>
                <a href={url} target="_blank" rel="noreferrer" className="inline-block mt-1 text-emerald-600 font-semibold hover:text-teal-600 underline">Open in new tab →</a>
              </div>
            )}
            {!failed && (
              <div className={`w-full aspect-[5/4] sm:aspect-[16/10] md:aspect-video xl:aspect-[21/9] bg-white min-h-[240px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px] max-h-[650px] xl:max-h-[780px] ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 relative`}>
                <iframe
                  title="Project Live Preview"
                  src={url}
                  loading="lazy"
                  sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
                  className="absolute inset-0 w-full h-full"
                  onLoad={() => setLoading(false)}
                  onError={() => { setFailed(true); setLoading(false); }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
