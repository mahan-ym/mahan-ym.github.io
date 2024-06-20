import React from 'react';
import skillsData from '../../public/content/skills.json';
import './skills.css';

function Skills() {
    return (
        <div className="relative flex flex-col w-screen h-screen ">
            <h1 className="text-4xl md:text-8xl font-tiny font-bold text-white w-full m-4">Skills:</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(skillsData).map(([category, skillsList], index) => (
                <div className="flex flex-col items-center m-5">
                    <h2 className="text-2xl md:text-4xl font-tiny font-bold text-white">{category}:</h2>
                    <div className="skill-container">
                        {skillsList.map((skill) => (
                            <div className="skill-card">
                                <img src={skill.icon} alt={skill.name}/>
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Skills;