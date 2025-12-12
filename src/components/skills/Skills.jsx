import React from 'react';
import skillsData from '../../public/content/skills.json';
import './skills.css';

function Skills() {
    return (
        <div className="skills">
            <div className="skills-main-container">
                <h1>Skills:</h1>
                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(skillsData).map(([category, skillsList], index) => (
                        <div className="flex flex-col items-center m-5" key={category}>
                            <h2>{category}:</h2>
                            <div className="skill-container">
                                {skillsList.map((skill) => (
                                    <div className="skill-card" key={skill.name}>
                                        <img src={skill.icon} alt={skill.name} />
                                        <p>{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;