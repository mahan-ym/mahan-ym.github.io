import React, { lazy, Suspense } from 'react';
import Experience from "./components/Experience.jsx";
import Skills from "./components/skills/Skills.jsx";
import Me from "./components/avatar/Me.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";
import Activity from "./components/activity/activity.jsx";
import './App.css';

const App = () => {
  return (
    <>
      <div className="background-div"></div>
      <Me />
      <Activity />
      <Experience />
      <Skills />
      <Education />
      <Publications />
      <Portfolio />
    </>
  );
};

export default App;