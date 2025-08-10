import React from 'react';
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si';

const MERNLogo = () => {
    return (
        <div className='flex items-center justify-center gap-2 rounded-lg'>
            <SiMongodb size={30} className="text-green-700" />
            <SiExpress size={30} color='gray'></SiExpress>
            <SiReact size={30} className="text-sky-500"></SiReact>
            <SiNodedotjs className="text-green-600" size={30}></SiNodedotjs>
        </div>
    );
};

export default MERNLogo;