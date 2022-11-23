import "./contact.css";
import { AiOutlineLinkedin, AiOutlineGithub,
   AiOutlineMedium, AiOutlineDownload, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <>
    <div id="contact" className="container contact-container">
      <h1 className="member-txt">Media</h1>
      <div className="contact-links">
        
        <a
          href="https://github.com/mahan-ym"
          className="contact"
          target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            Github <span> mahan-ym </span>
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/mahan-yarmohammad-5b1233174"
          className="contact"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            Linkedin <span> Mahan Yarmohammad </span>
          </h2>
        </a>

        <a
          href="https://medium.com/@mahan-yt"
          className="contact"
          target={"blank"}
        >
          <AiOutlineMedium className="icon" />
          <h2>
            medium <span> Mahan Yarmohammad </span>
          </h2>
        </a>

        <div
          className="contact"
          target={"blank"}
        >
          <AiOutlineMail className="icon" />
          <h2>
            Email <span> mahan.ymt@gmail.com </span>
          </h2>
        </div>

      </div>
    </div>
    
    <div id="download" className="container download-container">
      <div className="contact-links">

        <a href="/resume.pdf" className="contact" >
            <AiOutlineDownload className="icon"/>
            <h2>Download Resume</h2>
        </a>

        <a href="/cv.pdf" className="contact" >
            <AiOutlineDownload className="icon"/>
            <h2>Download CV</h2>
        </a>

      </div>
    </div>
  </>
  );
}

export default Contact;
