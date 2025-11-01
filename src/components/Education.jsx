import React from 'react';
import eduData from '../public/content/edu.json';
import SimpleGradientCard from "./gradientCard/SimpleGradientCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import './Education.css';

function Education() {

    return (
        <div className="education">
            <div className="education-container">
                <h1>Education:</h1>
                <div className="flex flex-col w-full items-center lg:justify-around lg:flex-row">
                    {eduData.map((edu, index) => (
                        <SimpleGradientCard key={edu.institution + index}>
                            <div className="flex flex-col md:flex-row items-center">
                                <FontAwesomeIcon className="w-1/5 h-1/5 m-3 md:w-1/12 md:h-1/5 md:m-5" icon={faAtom} spin spinReverse />
                                <div className="flex flex-col">
                                    <h2>{edu.degree}</h2>
                                    <p className="text-xl md:text-2xl">{edu.institution}</p>
                                    <p className="text-lg md:text-xl">{edu.period}</p>
                                </div>
                            </div>
                        </SimpleGradientCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
