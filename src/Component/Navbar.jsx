import React, { useEffect, useState } from 'react';
import { SiGithub, SiLinkedin, SiMailboxdotorg, SiWhatsapp } from 'react-icons/si';
import MERNLogo from './MERNLogo';



const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const navItemBase = 'font-medium tracking-wide transition-colors';
    const activeClass = 'text-cyan-900 font-semibold';
    const inactiveClass = 'text-gray-700 hover:text-cyan-900';

    const handleNavClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMenuOpen(false);
        }
    };

    // lock body scroll when mobile menu open
    useEffect(() => {
        if (menuOpen) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
    }, [menuOpen]);

    return (
        <nav className={`bg-gray-200/90 backdrop-blur-md text-gray-900 sticky top-0 z-50 shadow ${menuOpen ? 'fixed w-full left-0 top-0' : ''}`}
                 role="navigation" aria-label="Main">
            <div className="w-11/12 mx-auto flex items-center gap-6 py-3 md:py-4">
                <div className='flex items-center'>
                    <MERNLogo />
                </div>
            {/* Desktop Nav Links */}
            <ul className='ml-auto hidden md:flex gap-6 lg:gap-8 items-center'>
                {sections.map(s => (
                    <li key={s.id}>
                        <button
                            onClick={() => handleNavClick(s.id)}
                            className={`${navItemBase} ${activeSection === s.id ? activeClass : inactiveClass}`}
                        >
                            {s.label}
                        </button>
                    </li>
                ))}
                <li>
                    <a href='/Arif_Resume.pdf' target='_blank' rel='noopener noreferrer' className='px-4 py-1.5 rounded border border-cyan-900 text-cyan-900 hover:bg-cyan-900 hover:text-white font-semibold transition text-sm'>Resume</a>
                </li>
                <li className='flex gap-3 pl-4 border-l border-gray-300'>
                    <a aria-label='GitHub' href='https://github.com/Arif-Rabbani-188' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-900'><SiGithub size={20} /></a>
                    <a aria-label='LinkedIn' href='https://www.linkedin.com/in/arif-rabbani-dev' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-900'><SiLinkedin size={20} /></a>
                    <a aria-label='WhatsApp' href='https://wa.me/8801884481000' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-900'><SiWhatsapp size={20} /></a>
                    <a aria-label='Email' href='mailto:arif.rabbani.dev@gmail.com' className='hover:text-cyan-900'><SiMailboxdotorg size={20} /></a>
                </li>
            </ul>
            {/* Mobile Menu Toggle */}
            <button
                className='md:hidden ml-auto flex flex-col justify-center items-center w-9 h-9 rounded active:scale-95 transition'
                onClick={() => setMenuOpen(o => !o)}
                aria-label='Toggle menu'
                aria-expanded={menuOpen}
            >
                <span className={`block w-7 h-0.5 bg-cyan-900 mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-7 h-0.5 bg-cyan-900 mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-7 h-0.5 bg-cyan-900 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden' onClick={() => setMenuOpen(false)}>
                    <ul
                        className='absolute top-[64px] left-0 w-full bg-gray-200/95 shadow-lg flex flex-col gap-2 p-6 rounded-b-xl'
                        onClick={e => e.stopPropagation()}
                    >
                        {sections.map(s => (
                            <li key={s.id}>
                                <button
                                    onClick={() => handleNavClick(s.id)}
                                    className={`w-full text-left py-2 px-1 ${navItemBase} ${activeSection === s.id ? activeClass : inactiveClass}`}
                                >
                                    {s.label}
                                </button>
                            </li>
                        ))}
                        <li className='pt-2 flex flex-wrap gap-4 border-t border-gray-300 mt-2'>
                            <a href='/Arif_Resume.pdf' target='_blank' rel='noopener noreferrer' className='px-4 py-2 rounded border border-cyan-900 text-cyan-900 hover:bg-cyan-900 hover:text-white font-semibold transition text-sm flex-1 text-center'>Resume</a>
                        </li>
                        <li className='flex gap-5 pt-4'>
                            <a aria-label='GitHub' href='https://github.com/Arif-Rabbani-188' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-900'><SiGithub size={24} /></a>
                            <a aria-label='LinkedIn' href='https://www.linkedin.com/in/arif-rabbani-dev' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-900'><SiLinkedin size={24} /></a>
                            <a aria-label='WhatsApp' href='https://wa.me/8801884481000' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-900'><SiWhatsapp size={24} /></a>
                            <a aria-label='Email' href='mailto:arif.rabbani.dev@gmail.com' className='hover:text-cyan-900'><SiMailboxdotorg size={24} /></a>
                        </li>
                    </ul>
                </div>
            )}
            </div>
        </nav>
    );
};

export default Navbar;
