import React from 'react';
import aboutMeData from '../../public/content/aboutme.json';
import './aboutMe.css';

function AboutMe() {
    const { abstract, location, email, phone, linkedIn, github } = aboutMeData;

    return (
        <div className="about-me">
            <h1>About Me</h1>
            <p>{abstract}</p>
            <h2 className="mb-4 mt-4">Contact Information</h2>
            <p>Location: {location}</p>
            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
            <p>Phone: {phone}</p>
            <p>LinkedIn: <a href={linkedIn}>{linkedIn}</a></p>
            <p>GitHub: <a href={github}>{github}</a></p>
        </div>
    );
}

export default AboutMe;