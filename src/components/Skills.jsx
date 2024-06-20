import React from 'react';
import skillsData from '../public/content/skills.json';
import NeonBackgroundStripe from "./background/NeonBackground.jsx";

function Skills() {
    return (
        <div className="relative flex flex-col w-screen h-screen ">
            <NeonBackgroundStripe concentration={50}/>
            <h1 className="text-4xl font-bold text-white w-full m-4">Skills:</h1>
            {Object.entries(skillsData).map(([category, skillsList], index) => (
                <div>
                    <h2 className="text-2xl font-bold text-white w-full m-4">{category}:</h2>
                        {skillsList.map((skill) => (
                            <li className="text-white w-full m-4">{skill}</li>
                        ))}
                </div>
            ))}
        </div>
    );
}

export default Skills;