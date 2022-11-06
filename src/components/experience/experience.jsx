import "./experience.css";
import { HiOutlineAcademicCap } from "react-icons/hi"
import { AiOutlineFundProjectionScreen, AiOutlineProject } from "react-icons/ai"
import ExperienceSection from "./experience-section";
import ExperienceContent from "./experience-content";
import { SiAcademia } from "react-icons/si"

const Experience = () => {
  return (
    <div id="experience" className="container members-container">
      <h1 className="member-txt">Experiences</h1>

      <ExperienceSection 
        icon = {<AiOutlineFundProjectionScreen className="member-img"/>}
        title = 'Work Experience'
        content = {[
          <ExperienceContent 
            title = 'Metrix'
            role = 'Mobile Engineer'
            year = 'Aug 2021 - Apr 2022'
            description = {[
              "Developed and maintained Metrix's Android SDK and all of it's plugins: Flutter, React-Native, Unity, Cordova, PWA"
            ]}
          />,
          <ExperienceContent 
            title = 'JDEVS'
            role = 'Software Engineer'
            year = 'Nov 2018 - Aug 2021'
            description = {[
              "Developed a Desktop application using C# (WPF) :", <br/>,
              "- Calibration of UPS Boards using Modbus RTU connection protocol", <br/>,
              "- Generation of customized options for calibration", <br/>,
              "Developed an Android Application in three major versions", <br/>,
              "- Calibration of UPS Boards using Modbus RTU connection protocol", <br/>,
              "- Generation of customized options for calibration", <br/>,
              "- Implemented Bluetooth connection for Calibration", <br/>,
            ]}
          />
        ]}
      />

      <ExperienceSection 
        icon = {<HiOutlineAcademicCap className="member-img"/>}
        title = 'Education'
        content = {
          <ExperienceContent 
            title = 'B.Sc in Electrical Engineering - Control Systems'
            role = 'Iran University of Science and Technology (IUST)'
            year = '2017 - 2022'
            description = {[
              "Developed Frontend of the website with React and next.js", <br/>,
              "Developed Backend of the website with Django and used PostgreSQL as Database", <br/>,
              "Took advantage of the powerful GraphQL and use it to handle requests of the website"
            ]}
          />
        }
      />

      <ExperienceSection 
        icon = {<AiOutlineProject className="member-img"/>}
        title = 'Industry Projects'
        content = {[
          <ExperienceContent 
            title = {["E-Commerce website of", <a href="https://pamaro.co/">pamaro.co</a>]}
            role = 'FullStack Developer'
            year = 'Mar 2021 - Dec 2021'
            description = {[
              "Developed Frontend of the website with React and next.js", <br/>,
              "Developed Backend of the website with Django and used PostgreSQL as Database", <br/>,
              "Took advantage of the powerful GraphQL and use it to handle requests of the website"
            ]}
          />,
          <ExperienceContent 
            title = 'Android Application for Kandoo1+'
            role = 'Android Engineer'
            year = 'Oct 2020 - Jan 2021'
            description = {[
              "Identify hives by Scanning their QR code", <br/>,
              "Connect to hive's board (ESP boards) by socket connection and gather data", <br/>,
              "Display hives on a map", <br/>,
              "Connect to hive's board by socket connection and gather data"
            ]}
          />
        ]}
      />

      <ExperienceSection 
        icon = {<SiAcademia className="member-img"/>}
        title = 'Academic Projects'
        content = {[
          <ExperienceContent 
                  title = 'Design and Build a wind generation system, estimating wind speed based on neural networks - Degree Project'
                  year = '2022'
                  description = {[
                    "Built a laboratory scale wind generator and wind speed indicator system", <br/>,
                    "Trained following models for wind speed prediction: OneStep, BaseLine, Linear, Dense, CNN, RNN"
                  ]}
                />,
          <ExperienceContent 
            title = 'Design Temperature Alarm and monitoring system with ARM STM32 Microcontroller'
            year = '2020'
            description = {[
              "Implemented a temperature controller on microController", <br/>,
              "Developed Monitoring software with C# (WPF) which draw the room temperature curve and connect to Microcontroller via Serial connection", <br/>,
              "Wrote interactive code which would react to commands from PC Software"
            ]}
          />
        ]}
      />

    </div>
  );
};

export default Experience;
