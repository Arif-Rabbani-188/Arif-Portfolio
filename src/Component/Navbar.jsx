import React, { useState } from 'react';

const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "https://github.com/your-github-username", label: "GitHub", external: true },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex items-center px-8 py-4 bg-gray-300 text-gray-900 sticky top-0 z-50 shadow-lg backdrop-blur-md">
            <div className="font-extrabold text-3xl tracking-widest flex items-center gap-2">
                <span className="text-cyan-900 px-2 py-1 border-cyan-900 border-3 rounded-lg">ARIF.DEV</span>
                <span className="hidden sm:inline"></span>
            </div>
            
        </nav>
    );
};

export default Navbar;
