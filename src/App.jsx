import React, {useEffect, useState} from 'react';
import Home from './components/Home.jsx';
import Experience from "./components/Experience.jsx";
import Skills from "./components/skills/Skills.jsx";
import NeonBackgroundStripe from "./components/background/NeonBackground.jsx";
import Me from "./components/avatar/Me.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";

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
      <>
          <NeonBackgroundStripe scrollPosition={scrollPosition}/>
          <Me />
          <Home />
          <Experience />
          <Skills />
          <Education />
          <Publications />
          <Portfolio />
      </>
  );
};

export default App;