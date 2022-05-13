import "./experience.css";
import { HiOutlineAcademicCap } from "react-icons/hi"
import { AiOutlineFundProjectionScreen, AiOutlineProject } from "react-icons/ai"
import { SiAcademia } from "react-icons/si"


const Experience = () => {
  return (
    <div id="experience" className="container members-container">
      <h1 className="member-txt">Experiences</h1>

      <div className="member">
        <div className="member-img">
          <AiOutlineFundProjectionScreen className="member-img"/>
        </div>
        <div className="member-info">
          <h1 className="name">Work Experience</h1>
          <div className="row work">
            <div className="nine columns main-col">

              <div>
                <h3>Metrix</h3>
                <p className="info">Mobile Engineer<span>&bull;</span> <em className="date">Aug 2021 - Apr 2022</em></p>
                <p className="description">Developed and maintained Metrix's Android SDK and all of it's plugins: Flutter, React-Native, Unity, Cordova, PWA</p>
              </div>

              <div>
                <h3>JDEVS</h3>
                <p className="info">Software Engineer<span>&bull;</span> <em className="date">Nov 2018 - Aug 2021</em></p>
                <p className="description">
                Developed a Desktop application using C# (WPF) : <br></br>
                - Calibration of UPS Boards using Modbus RTU connection protocol <br></br>
                - Generation of customized options for calibration <br></br>
                Developed an Android Application in three major versions <br></br>
                - Calibration of UPS Boards using Modbus RTU connection protocol <br></br>
                - Generation of customized options for calibration <br></br>
                - Implemented Bluetooth connection for Calibration <br></br>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="member">
        <div className="member-img">
          <HiOutlineAcademicCap className="member-img"/>
        </div>
        <div className="member-info">
          <h1 className="name">Education</h1>
          <div className="row academy">
            <div className="nine columns main-col">

              <div>
                <h3>B.Sc in Electrical Engineering - Control Systems</h3>
                <p className="info">Iran University of Science and Technology (IUST)<span>&bull;</span> <em className="date">2017 - 2022</em></p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="member">
        <div className="member-img">
          <AiOutlineProject className="member-img"/>
        </div>
        <div className="member-info">
          <h1 className="name">Industry Projects</h1>
          <div className="row academy">
            <div className="nine columns main-col">

              <div>
                <h3>E-Commerce website of <a href="https://pamaro.co/">pamaro.co</a></h3>
                <p className="info">FullStack Developer<span>&bull;</span> <em className="date">Mar 2021 - Dec 2021</em></p>
                <p className="description">
                Developed Frontend of the website with React and next.js <br></br>
                Developed Backend of the website with Django and used PostgreSQL as Database <br></br>
                Took advantage of the powerful GraphQL and use it to handle requests of the website
                </p>
              </div>

              <div>
                <h3>Android Application for Kandoo1+</h3>
                <p className="info">Android Engineer<span>&bull;</span> <em className="date">Oct 2020 - Jan 2021</em></p>
                <p className="description">
                Identify hives by Scanning their QR code <br></br>
                Connect to hive's board (ESP boards) by socket connection and gather data <br></br>
                Display hives on a map <br></br>
                Connect to hive's board by socket connection and gather data <br></br>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="member">
        <div className="member-img">
          <SiAcademia className="member-img"/>
        </div>
        <div className="member-info">
          <h1 className="name">Academic Projects</h1>
          <div className="row academy">
            <div className="nine columns main-col">

              <div>
                <h3>Design and Build a wind generation system, estimating wind speed based on neural networks - Degree Project</h3>
                <p className="info"><span>&bull;</span> <em className="date">2022</em></p>
                <p className="description">
                Built a laboratory scale wind generator and wind speed indicator system <br></br>
                Trained following models for wind speed prediction: OneStep, BaseLine, Linear, Dense, CNN, RNN
                </p>
             </div>

             <div>
                <h3>Design Temperature Alarm and monitoring system with ARM STM32 Microcontroller</h3>
                <p className="info"><span>&bull;</span> <em className="date">2020</em></p>
                <p className="description">
                Implemented a temperature controller on microController <br></br>
                Developed Monitoring software with C# (WPF) which draw the room temperature curve and connect to Microcontroller via Serial connection <br></br>
                Wrote interactive code which would react to commands from PC Software
                </p>
             </div>
             
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Experience;
