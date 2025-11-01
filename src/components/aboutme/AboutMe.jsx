import React from 'react';
import aboutMeData from '../../public/content/aboutme.json';
import './aboutMe.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
    const { abstract, location, email, phone, linkedIn, github } = aboutMeData;

    return (
        <div className="about-me">
            <h1>Mahan Yarmohammad Tajari</h1>
            <h2>AI Engineer</h2>
            <h1 className='mt-2'>About Me</h1>
            <p className="text-justify">{abstract}</p>
            <h2 className="text-2xl mt-2 md:text-4xl">Contact Information</h2>
            <p><FontAwesomeIcon icon={faLocationDot} beat /> Location: {location}</p>
            <p><FontAwesomeIcon icon={faEnvelope} beat /> Email: <a href={`mailto:${email}`}>{email}</a></p>

            <p><FontAwesomeIcon icon={faPhone} beat /> Phone: {phone}</p>
            <p><FontAwesomeIcon icon={faLinkedin} beat /> LinkedIn: <a href={linkedIn}>{linkedIn}</a></p>
            <p><FontAwesomeIcon icon={faGithub} beat /> GitHub: <a href={github}>{github}</a></p>
        </div>
    );
}

export default AboutMe;