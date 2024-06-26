import React from 'react';
import aboutMeData from '../../public/content/aboutme.json';
import './aboutMe.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
    const { abstract, location, email, phone, linkedIn, github } = aboutMeData;

    return (
        <div className="about-me">
            <h1 className="ml-0">About Me</h1>
            <p className="text-justify">{abstract}</p>
            <h2 className=" ml-0 text-4xl md:text-6xl">Contact Information</h2>
            <p><FontAwesomeIcon icon={faLocationDot} beat /> Location: {location}</p>
            <p><FontAwesomeIcon icon={faEnvelope} bounce /> Email: <a href={`mailto:${email}`}>{email}</a></p>

            <p><FontAwesomeIcon icon={faPhone} shake /> Phone: {phone}</p>
            <p><FontAwesomeIcon icon={faLinkedin} fade /> LinkedIn: <a href={linkedIn}>{linkedIn}</a></p>
            <p><FontAwesomeIcon icon={faGithub} spin /> GitHub: <a href={github}>{github}</a></p>
        </div>
    );
}

export default AboutMe;