import React from 'react';

// Unified section heading component
// Usage: <SectionHeading title="Skills" />
// Optional props: subtitle, className, accent (tailwind gradient end colors)
const SectionHeading = ({ title, subtitle = '', accent = 'from-sky-500 to-purple-600', className = '' }) => {
	return (
		<div className={`mb-8 text-center ${className}`}>
			<div className="flex items-center justify-center gap-4">
				<span className="hidden sm:block w-16 h-[3px] rounded-full bg-gradient-to-r from-sky-400 to-purple-500" />
				<h2 className={`text-2xl md:text-5xl font-bold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r ${accent} drop-shadow-lg`}>{title}</h2>
				<span className="hidden sm:block w-16 h-[3px] rounded-full bg-gradient-to-l from-sky-400 to-purple-500" />
			</div>
			{subtitle && <p className="mt-3 text-sm md:text-base text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
		</div>
	);
};

export default SectionHeading;
