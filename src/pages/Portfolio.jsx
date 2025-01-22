// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import './css/Portfolio.css';

import SurfReportImage from '../assets/images/02-surf-report-4.jpg';
import LedWallImage from '../assets/images/02-led-wall-1.jpg';
import RunBuddyImage from '../assets/images/02-run-buddy.jpg';
import ReactCalcImage from '../assets/images/02-react-calc-2.jpg';
import PastelPuzzlesImage from '../assets/images/02-pastel-puzzles-3.jpg';

const projects = [
    {
        id: 1,
        title: 'Surf Report',
        stack: 'MERN Stack',
        image: SurfReportImage,
        repo: 'https://github.com/Amarrero0215',
        featured: true,
    },
    {
        id: 2,
        title: 'LED Wall',
        stack: 'Node/IoT',
        image: LedWallImage,
        repo: 'https://github.com/Amarrero0215',
    },
    {
        id: 3,
        title: 'Run Buddy',
        stack: 'HTML/CSS',
        image: RunBuddyImage,
        repo: 'https://github.com/Amarrero0215',
    },
    {
        id: 4,
        title: 'React Calculator',
        stack: 'React',
        image: ReactCalcImage,
        repo: 'https://github.com/Amarrero0215',
    },
    {
        id: 5,
        title: 'Pastel Puzzles',
        stack: 'CSS Design',
        image: PastelPuzzlesImage,
        repo: 'https://github.com/Amarrero0215',
    },
];

export default function Portfolio() {
    return (
        <div className="section">
            <h1 className="title">Portfolio</h1>
            <div className="portfolio-grid">
                {projects.map((project) => (
                        <Project
                            key={project.id}
                            title={project.title}
                            stack={project.stack}
                            image={project.image}
                            repo={project.repo}
                            featured={project.featured} // Pass the "featured" flag
                        />
                    ))}
            </div>
        </div>
    );
}

