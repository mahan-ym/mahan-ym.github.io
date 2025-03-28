import React, {useEffect, useState} from 'react';
import Home from './components/Home.jsx';
import Experience from "./components/Experience.jsx";
import Skills from "./components/skills/Skills.jsx";
import Me from "./components/avatar/Me.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";
import Activity from "./components/activity/activity.jsx";

const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollPosition(scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
      <div>
          <img src="/images/back.png" alt="gradient" className="fixed w-full h-full -z-50 object-cover"/>
          <div className="mx-2">
            <Me />
            <Home />
            <Activity />
            <Experience />
            <Skills />
            <Education />
            <Publications />
            <Portfolio />
          </div>
      </div>
  );
};

export default App;