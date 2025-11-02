import React, { lazy, Suspense } from 'react';
import Experience from "./components/Experience.jsx";
import Skills from "./components/skills/Skills.jsx";
import Me from "./components/avatar/Me.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";
import Activity from "./components/activity/activity.jsx";

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="w-full h-full flex bg-black"></div>}>
        <img src="/images/back.png" alt="gradient" className="fixed w-full h-full -z-50 object-cover" loading="lazy" />
      </Suspense>
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