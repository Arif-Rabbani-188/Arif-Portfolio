import React from 'react';
import MERNLogo from './MERNLogo';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0a2342] via-[#193660] to-[#2e3a59] text-gray-200 pt-10 pb-3 px-3 text-center text-base">
            <div className='mb-2'>
                <MERNLogo></MERNLogo>
            </div>
            <div className="mb-2">
                Built with <span className="text-blue-300">React</span> &amp; <span className="text-green-300">JavaScript</span>
            </div>
            
            <span>Location: Rajshahi, Bangladesh</span>
            <div className="mb-2 mt-5 text-sm">
                &copy; {new Date().getFullYear()} Khan Mahmud Arif Rabbani. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;