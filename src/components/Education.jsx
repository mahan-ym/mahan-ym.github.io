import React from 'react';
import eduData from '../public/content/edu.json';
import SimpleGradientCard from "./gradientCard/SimpleGradientCard.jsx";

function Education() {

    return (
        <div className="relative flex flex-col w-screen ">
            <h1 className="text-4xl md:text-8xl font-orbitron font-bold text-white w-full m-4">Education:</h1>
            <div className="flex flex-col w-full items-center lg:justify-around lg:flex-row">
            {eduData.map((edu) => (
                <SimpleGradientCard >
                    <h2 className="text-2xl md:text-4xl font-bold text-white">{edu.degree}</h2>
                    <p className="text-xl md:text-2xl text-white">{edu.institution}</p>
                    <p className="text-lg md:text-xl text-white">{edu.period}</p>
                </SimpleGradientCard>
            ))}
            </div>
        </div>
    )
  }
  
  export default Education
  