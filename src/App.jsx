import React from 'react';
import Experience from "./components/Experience.jsx";
import Skills from "./components/skills/Skills.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";
import Activity from "./components/activity/activity.jsx";
import Nav from "./components/Nav.jsx";
import AboutMe from "./components/aboutme/AboutMe.jsx";
import Terminal from "./components/Terminal.jsx";
import './App.css';

const App = () => {
    return (
        <>
            <div className="bg-wrap">
                <div className="bg-orb bg-orb-1"></div>
                <div className="bg-orb bg-orb-2"></div>
                <div className="bg-orb bg-orb-3"></div>
                <div className="bg-orb bg-orb-4"></div>
            </div>
            <Nav />
            <div id="me" className="pt-20 px-5">
                <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 max-w-7xl mx-auto py-8">
                    <div className="w-full xl:w-3/5">
                        <AboutMe />
                    </div>
                    <div className="w-full xl:w-2/5 flex items-center justify-center xl:pt-6">
                        <Terminal />
                    </div>
                </div>
            </div>
            <div id="activity"><Activity /></div>
            <div id="experience"><Experience /></div>
            <div id="skills"><Skills /></div>
            <div id="education"><Education /></div>
            <div id="publications"><Publications /></div>
            <div id="portfolio"><Portfolio /></div>
        </>
    );
};

export default App;
