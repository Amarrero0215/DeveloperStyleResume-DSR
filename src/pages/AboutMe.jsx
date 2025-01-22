// src/pages/AboutMe.jsx
import React from 'react';
import './css/AboutMe.css';

export default function AboutMe() {
    return (
        <div className="section">
            <h1 className="title">About Me</h1>
            <img
                src="https://ui-avatars.com/api/?name=Alex+Marrero"
                alt="Alex Marrero"
                className="about-me-avatar"
            />
            <div className="about-me-bio">
                <p>
                    I am a passionate and dedicated professional with a diverse background spanning mechanical design, engineering, and software development. 
                    My career journey has included designing and assembling custom Land Rover Defenders, advanced technical training at Oceaneering, and a commitment to continuous learning through a software development program at UCF. 
                    These experiences have honed my problem-solving skills, creativity, and technical expertise.
                </p>
                <p>
                    With a strong interest in creating innovative solutions, I have developed a deep passion for coding and software development. 
                    I enjoy combining hands-on mechanical knowledge with modern programming to tackle complex challenges, whether through dynamic web applications, responsive interfaces, or utility-based tools.
                </p>
                <p>
                    Outside of my career, I take pride in building and customizing vehicles, pursuing self-driven projects, and exploring cutting-edge technologies. 
                    My goal is to leverage my diverse skill set to contribute meaningfully to forward-thinking projects and create impactful, user-centric solutions.
                </p>
            </div>
        </div>
    );
}