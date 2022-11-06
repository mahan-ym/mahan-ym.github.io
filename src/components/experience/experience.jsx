import "./experience.css";
import { HiOutlineAcademicCap } from "react-icons/hi"
import { AiOutlineFundProjectionScreen, AiOutlineProject } from "react-icons/ai"
import ExperienceSection from "./experience-section";
import ExperienceContent from "./experience-content";
import { SiAcademia } from "react-icons/si";

const Experience = () => {
  return (
    <div id="experience" className="container members-container">
      <h1 className="member-txt">Experiences</h1>

      <ExperienceSection 
        icon = {<AiOutlineFundProjectionScreen className="member-img"/>}
        title = 'Work Experience'
        content = {[
          <ExperienceContent 
            title = 'Footballist'
            role = 'Part-time Android Engineer'
            year = 'Apr 2022 - now'
            description = {[
              "Footballist is a live football score, stats, and news-tracking application. It is a three-member project, including me.", <br/>,
              "I developed the Android application. Also, I used the most recent, publish-ready features and libraries of android in this application.", <br/>,
              "The application is now available on",  <a href="https://play.google.com/store/apps/details?id=net.footballist"> Google Play Store.</a>
            ]}
          />,
          <ExperienceContent 
            title = 'Metrix'
            role = 'Full-time Mobile Engineer'
            year = 'Aug 2021 - Apr 2022'
            description = {[
              "One of my most professional experiences was during the time I spent in \"Pegah Dade Kavan Sharif.\"", <br/>,
              "It is mainly known for its product \"Tapsell,\" an advertising network agency that is primarily focused on mobile platforms.", <br/>,
              "The company has several other products: Metrix, BeepTunes, MediaAd, and Funtory.", <br/>,
              <a href="https://metrix.ir/">Metrix </a>,"is an analytics tool for mobile attribution, analytics, and fraud prevention.", <br/>,
              "Some tasks that I was engaged in:", <br/>, <br/>,
              <ul>
                <li>Developed and maintained Metrix's Android SDK (in Kotlin) and all of its plugins, including (Flutter, React- Native, Unity, Cordova, and PWA ).</li>
                <li>async calls from plugins to native. I also published two blogs about the technique I used for flutter in a sample project available on my Github.</li>
                <li>store referrer detection for play services, HMS, and GooglePlay without dependence on their SDK</li>
                <li>Refactoring the Metrix Project and removing one of its modlies which made the build of the SDK faster</li>
                <li>Device network state detection, and ...</li>
                <li>Developed test applications for SDK implementation beta testing on real users.</li>
              </ul>
            ]}
          />,
          <ExperienceContent 
            title = 'JDEVS'
            role = 'Part-time Software Engineer'
            year = 'Nov 2018 - Aug 2021'
            description = {[
              "JDEVS, located in IUST, manufactures and builds UPSs, Inverters, Chargers, Industrial monitoring systems, and more.", <br/>,
              "I joined as a software engineer and developed several software during my activity.", <br/>,
              <ul>
                <li>Developed a calibration software</li>
                <ol>
                  <li>Calibration of UPS Boards using Modbus RTU connection protocol</li>
                  <li>Generation of customized options for calibration</li>
                </ol>
              </ul>,
              <ul>
                <li>Developed an Android application in three major versions</li>
                <ol>
                  <li>Calibration of UPS boards using Modbus RTU connection protocol</li>
                  <li>Generation of customized options for calibration</li>
                  <li>Utilized Bluetooth connection for calibration</li>
                </ol>
            </ul>
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
            role = 'Iran University of Science and Technology (IUST) | Tehran, Iran'
            year = '2017 - 2022'
            description = {[
              "Degree Project: Design and Build a Wind Generation System and Estimating near future Wind Speed based on Neural Networks", <br/>,
            ]}
          />
        }
      />

      <ExperienceSection 
        icon = {<AiOutlineProject className="member-img"/>}
        title = 'Industry Projects'
        content = {[
          <ExperienceContent 
            title = {["E-Commerce website of ", <a href="https://pamaro.co/"> pamaro.co</a>]}
            role = 'FullStack Developer'
            year = 'Mar 2021 - Dec 2021'
            description = {[
              "Pamaro(rebranding as libertoe) is an ergonomic shoe manufacturer that I in a 3-member group, created their E-Commerce website." , <br/>,
              "The tasks that I was involved with were:", <br/>,
              <ul>
                <li>Developed Frontend of the website with React and next.js</li>
                <li>Developed Backend of the website with Django and used PostgreSQL as Database</li>
                <li>Utilized the powerful GraphQL and use it to handle requests for the website</li>
              </ul>
            ]}
          />,
          <ExperienceContent 
            title = 'Android Application for Kandoo1+'
            role = 'Android Engineer'
            year = 'Oct 2020 - Jan 2021'
            description = {[
              "Kandoo1plus builds IOT-based bee hives to monitor and enhance honey quality and production.", <br/>,
              "some features I developed in Kandoo1plus:", <br/>,
              <ul>
                <li>Identification of hives by Scanning their QR code</li>
                <li>Connection to hive's board (ESP boards) by socket connection and gather data</li>
                <li>Display hives on a map</li>
                <li>ESP boards to server data integration through Android application</li>
              </ul>
            ]}
          />,
          <ExperienceContent 
            title = 'Implementation of a Remote Control System for a Waste Water Company'
            year = '2020'
            description = {
              <ul>
                <li>Interacted with the <a href="https://www.go-sys.de/en/bluebox/">BlueBox</a> to broadcast sensor information</li>
                <li>Designed a web application for monitoring purpose</li>
              </ul>
            }
          />,
        ]}
      />

      <ExperienceSection 
        icon = {<SiAcademia className="member-img"/>}
        title = 'Academic Projects'
        content = {[
          <ExperienceContent 
            title = 'Design and Build a wind generation system, estimating near future wind speed based on neural networks - Degree Project'
            year = '2022'
            description = {
              <ul>
                <li>Built a prototype wind generator and wind speed indicator system</li>
                <li>Trained the following models for wind speed prediction: OneStep, BaseLine, Linear, Dense, CNN, LSTM</li>
              </ul>
            }
          />,
          <ExperienceContent 
            title = 'Design Temperature Monitoring System with ARM STM32 Microcontroller'
            year = '2020'
            description = {
              <ul>
                <li>Implemented a temperature controller on the Microcontroller</li>
                <li>wrote interactive code which would react to commands from PC Software</li>
                <li>Developed a monitoring software that monitored the room temperature by connecting to the Microcontroller through a Serial connection</li>
              </ul>
            }
          />,
          <ExperienceContent 
            title = 'Persistence of View (POV) Display'
            year = 'Fall 2020'
            description = {
              <ul>
                <li>Used Wemos D1 mini board and ESP8266 Wi-Fi module</li>
                <li>Coded a web application on ESP board to monitor speed and other measurement variables without the need for cable connection</li>
                <li>Used Hall effect sensor for speed measurement</li>
              </ul>
            }
          />,
          <ExperienceContent 
            title = 'Designed an adaptive controller for a quadrotor drone equipped with a robotic arm (The Modern control course project)'
            year = '2020'
            description = {
              <ul>
                <li>I used <a href="https://ieeexplore.ieee.org/abstract/document/6957440">this paper</a> to extract the mathematical model of the quad</li>
                <li>Investigated the state-space model of the quad and then designed an adaptive controller for it.</li>
              </ul>
            }
          />,
          <ExperienceContent 
            title = 'Designed an Industrial controller (The Industrial control course project)'
            year = '2020'
            description = {
              <ul>
                <li>used a pre-defined equation of an industrial process, then obtained an approximate model of the equation with system recognition.</li>
                <li>Designed and Tuned a PID controller for the process using different methods such as Zigler- Nicols</li>
                <li>Use Smith Predictor to control the effect of time delay in the process</li>
              </ul>
            }
          />,
          <ExperienceContent 
            title = 'Single Ball Magnetic Levitation (The Mechatronics course project)'
            year = '2020'
            description = {
              <ul>
                <li>modeled, linearized, and simulated the non-linear system.</li>
                <li>stabilized the ball movement by using lead controller</li>
                <li>Simulate and animate the levitation of the ball using Matlab</li>
              </ul>
            }
          />,
          <ExperienceContent 
            title = 'Developed Hangman game in C language (The Fundamentals of Computer Programming course at Amirkabir University of Technology)'
            year = '2017'
            description = {
              <ul>
                <li>Developed a console game based on hangman game which was coded in C language</li>
              </ul>
            }
          />
        ]}
      />

    </div>
  );
};

export default Experience;
