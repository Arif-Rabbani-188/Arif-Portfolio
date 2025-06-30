import React from 'react';
import MERNLogo from './MERNLogo';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200 py-8 text-center text-base">
            <div className='mb-2'>
                <MERNLogo></MERNLogo>
            </div>
            <div className="mb-2">
                &copy; {new Date().getFullYear()} Khan Mahmud Arif Rabbani. All rights reserved.
            </div>
            <div className="mb-2">
                Built with <span className="text-blue-300">React</span> &amp; <span className="text-green-300">JavaScript</span>
            </div>
            <div className="mb-2">
                <span>Contact: </span>
                <a
                    href="mailto:arif.rabbani.dev@gmail.com"
                    className="text-gray-100 underline mx-2 hover:text-blue-300"
                >
                    arif.rabbani.dev@gmail.com
                </a>
                <span className="hidden sm:inline">| Location: Rajshahi, Bangladesh</span>
            </div>
        </footer>
    );
};

export default Footer;