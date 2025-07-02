import React from 'react';

const educationData = [
    {
        institution: "University of Rajshahi",
        degree: "Bachelor of Science in Physics",
        period: "2021 – present",
        details: [
            "CGPA: 3.02/4.00",
            "Coursework: Quantum Mechanics, Electromagnetism, Electronics, Thermodynamics, Statistical Mechanics, Solid State Physics ect",
            "Relevant Courses: Computer Programming, C , Fortran,  Algorithms, Numerical Methods",

        ],
    },
    {
        institution: "Govt. Islampur College",
        degree: "Higher Secondary Certificate (HSC)",
        period: "2018 – 2020",
        details: [
            "Science Major",
            "GPA: 5.00/5.00",
        ],
    },
    {
        institution: "Govt. Islampur Nekjahan Pilot Model High School",
        degree: "Secondary School Certificate (SSC)",
        period: "2016 – 2018",
        details: [
            "Science Major",
            "GPA: 5.00/5.00",
        ],
    },
];

const Education = () => (
    <section className="my-12 mx-5 md:mx-20 ">
        <div className="flex items-center justify-center mb-8">
                <span className="block w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mr-4"></span>
                <h2 className="text-center text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600 tracking-wide uppercase drop-shadow-lg">
                    Education
                </h2>
                <span className="block w-16 h-1 bg-gradient-to-l from-sky-400 to-purple-500 rounded-full ml-4"></span>
            </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            {educationData.map((edu, idx) => (
                <div
                    key={idx}
                    className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col"
                >
                    <div className="flex items-center mb-2">
                        <span className="inline-block w-3 h-3 bg-primary rounded-full mr-2"></span>
                        <span className="text-primary font-medium">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-md text-gray-700 font-medium">{edu.institution}</p>
                    <ul className="list-disc ml-6 mt-2 text-sm text-gray-600">
                        {edu.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

export default Education;
