import React from 'react';
import experienceData from '../public/content/experience.json';
import GradientCard from "./gradientCard/GradientCard.jsx";

function Experience() {

    return (
        <div className="relative flex flex-col w-screen ">
            <h1>Experience:</h1>
            <h2>Industry</h2>
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
            <h2>Academic</h2>
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