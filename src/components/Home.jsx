import React from 'react';
import AboutMe from "./aboutme/AboutMe.jsx";
import RoomCoverCanvas from "./aboutme/RoomCoverCanvas.jsx";

const Home = () => {
  return (
      <div className={"relative w-screen h-screen overflow-hidden"}>
          <div className="relative flex flex-rowitems-center w-full h-full">
              <div className="absolute xl:relative -z-10 w-full xl:w-2/5 h-full content-center">
              <RoomCoverCanvas />
              </div>
              <div className="w-full xl:w-3/5 h-full content-center">
                  <AboutMe/>
              </div>
          </div>
      </div>
  );
};

export default Home;
