import React from 'react';
import experienceData from '../public/content/experience.json';
import GradientCard from "./gradientCard/GradientCard.jsx";

function Experience() {

    return (
        <div className="relative flex flex-col w-screen ">
            <h1 className="text-4xl md:text-8xl font-orbitron font-bold text-white w-full m-4">Experience:</h1>
            <h2 className="text-2xl md:text-4xl font-orbitron text-white font-bold w-full m-4">Industry</h2>,
            {experienceData.industry.map((exp, index) => (
                <div className={index % 2 === 0 ? "xl:mr-auto m-2 xl:m-4 flex flex-col " : "xl:ml-auto m-2 xl-m4 flex flex-col"}>
                    <GradientCard
                        indx={index}
                        position={exp.position}
                        company={exp.company}
                        location={exp.location}
                        date={exp.date}
                        duration={exp.length}
                        description={exp.description}
                        achievements={exp.achievements}/>
                </div>
            ))}
            <h2 className="text-2xl md:text-4xl font-orbitron text-white font-bold w-full m-4">Academic</h2>,
            {experienceData.academic.map((exp, index) => (
                <div className={index % 2 === 0 ? "xl:mr-auto m-2 xl:m-4 flex flex-col " : "xl:ml-auto m-2 xl-m4 flex flex-col"}>
                    <GradientCard
                        indx={index}
                        position={exp.project}
                        date={exp.date}
                        duration={exp.length}
                        achievements={exp.achievements}/>
                </div>
            ))}
        </div>
    );
}

export default Experience;