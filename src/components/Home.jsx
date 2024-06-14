import React, {useEffect, useRef} from 'react';
import background from '../public/images/background.jpg';
import AboutMe from "./aboutme/AboutMe.jsx";
import MahanObjCanvas from "./avatar/MahanObjCanvas.jsx";

const Home = () => {
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const AvatarRef = useRef(null);
    const zoomThreshold = 300;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scaleFactor = 1 + scrollY * 0.0025;
            const translateFactor = -scrollY * 4;

            if (scrollY <= zoomThreshold) {
                if (homeRef.current) {
                    homeRef.current.style.transform = `scale(${scaleFactor})`;
                }

                if (aboutMeRef.current) {
                    aboutMeRef.current.style.transform = `translateX(${translateFactor}px)`;
                }
                if (AvatarRef.current) {
                    AvatarRef.current.style.transform = `translateX(${-translateFactor}px)`;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
      <div className={"relative w-screen h-screen overflow-hidden"}>
          <div ref={homeRef} className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transformOrigin: 'top',
          }}>
          </div>
          <div className="relative flex items-center w-full h-full">
              <div ref={aboutMeRef} className="w-3/5 h-screen content-center">
                  <AboutMe/>
              </div>
              <div ref={AvatarRef} className="w-2/5 h-screen">
                  <MahanObjCanvas/>
              </div>
          </div>
      </div>
  );
};

export default Home;
