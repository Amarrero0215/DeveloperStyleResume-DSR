// src/pages/Resume.jsx
import React from 'react';
import './css/Resume.css';

export default function Resume() {
    return (
        <div className="section">
            <h1 className="title">Resume</h1>
            <a href="/path/to/resume.pdf" className="resume-download" download>
                Download my resume
            </a>
            <div className="proficiencies">
                <div className="proficiency-section">
                    <h2>Front-end Proficiencies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Responsive Design</li>
                        <li>C#</li>
                    </ul>
                </div>
                <div className="proficiency-section">
                    <h2>Back-end Proficiencies</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST APIs</li>
                        <li>GraphQL</li>
                        <li>C++</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
