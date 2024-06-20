import React from 'react';
import experienceData from '../public/content/experience.json';
import GradientCard from "./gradientCard/GradientCard.jsx";

function Experience() {

    return (
        <div className="relative flex flex-col w-screen ">
            <h1 className="text-4xl md:text-8xl font-tiny font-bold text-white w-full m-4">Experience:</h1>
            {experienceData.industry.map((exp, index) => (
                <div className={index % 2 === 0 ? "mr-auto m-4" : "ml-auto m-4"}>
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
        </div>
    );
}

export default Experience;