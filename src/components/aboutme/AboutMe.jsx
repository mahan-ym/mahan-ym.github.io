import React from 'react';
import aboutMeData from '../../public/content/aboutme.json';
import './aboutMe.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
    const { abstract, location, email, linkedIn, github } = aboutMeData;

    return (
        <div className="about-me">
            <div className="about-me-header">
                <h1 className="hero-name">Mahan Yarmohammad Tajari</h1>
                <span className="role-badge">AI Engineer</span>
            </div>
            <p className="about-me-abstract text-justify">{abstract}</p>
            <div className="contact-grid">
                <a href={`mailto:${email}`} className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>{email}</span>
                </a>
                <span className="contact-item">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{location}</span>
                </span>
                <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="contact-item contact-item--social">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="contact-item contact-item--social">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    );
}

export default AboutMe;
