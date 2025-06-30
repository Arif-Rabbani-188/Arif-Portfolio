import React, { useState } from 'react';
import { SiGithub, SiLinkedin, SiMailboxdotorg, SiMaildotcom, SiWhatsapp } from 'react-icons/si';
import MERNLogo from './MERNLogo';



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`flex py-5 items-center px-4 bg-gray-300 text-gray-900 sticky top-0 z-50 shadow-lg backdrop-blur-md ${menuOpen ? "fixed w-full left-0 top-0" : ""}`}>
            <div className='ml-2 md:ml-10'>
                <MERNLogo></MERNLogo>
            </div>
            <div className="ml-auto flex items-center gap-4">
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 mr-10 ">
                    <li>
                        <a  href="https://github.com/Arif-Rabbani-188" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 transition-colors">
                           <span className='flex items-center gap-2 font-semibold'><SiGithub size={20}></SiGithub>GitHub</span> 
                        </a>
                    </li>
                    <li>
                        <a  href="www.linkedin.com/in/arif-rabbani-dev" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 transition-colors">
                           <span className='flex items-center gap-2 font-semibold'><SiLinkedin size={20}></SiLinkedin>LinkdIn</span> 
                        </a>
                    </li>
                    <li>
                        <a  href=" https://wa.me/+8801884481000" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 transition-colors">
                           <span className='flex items-center gap-2 font-semibold'><SiWhatsapp size={20}></SiWhatsapp>Whatsapp</span> 
                        </a>
                    </li>
                    <li>
                        <a  href="mailto:arif.rabbani.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 transition-colors">
                           <span className='flex items-center gap-2 font-semibold'><SiMailboxdotorg size={20}></SiMailboxdotorg>Email</span> 
                        </a>
                    </li>
                    <li>
                        <a
                            href="/Arif_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-900 transition-colors font-semibold border border-cyan-900 px-3 py-1 rounded"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-cyan-900 mb-1 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-cyan-900 mb-1 transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-cyan-900 transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-opacity-40 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
                    <ul
                        className="absolute top-18 left-0 w-full bg-gray-300 rounded-none shadow-lg flex flex-col gap-8 p-6"
                        onClick={e => e.stopPropagation()}
                    >
                        
                         <li>
                        <a  href="https://github.com/Arif-Rabbani-188" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 transition-colors">
                           <span className='flex items-center gap-2 font-semibold'><SiGithub size={20}></SiGithub>GitHub</span> 
                        </a>
                    </li>
                    <li>
                        <a  href="www.linkedin.com/in/arif-rabbani-dev" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 transition-colors">
                           <span className='flex items-center gap-2 font-semibold'><SiLinkedin size={20}></SiLinkedin>LinkdIn</span> 
                        </a>
                    </li>
                    <li>
                        <a  href=" https://wa.me/+8801884481000" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 transition-colors">
                           <span className='flex items-center gap-2 font-semibold'><SiWhatsapp size={20}></SiWhatsapp>Whatsapp</span> 
                        </a>
                    </li>
                    <li>
                        <a  href="mailto:arif.rabbani.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-900 transition-colors">
                           <span className='flex items-center gap-2 font-semibold'><SiMailboxdotorg size={20}></SiMailboxdotorg>Email</span> 
                        </a>
                    </li>
                    <li>
                        <a
                            href="/Arif_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-900 transition-colors font-semibold border border-cyan-900 px-3 py-1 rounded"
                        >
                            Resume
                        </a>
                    </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
