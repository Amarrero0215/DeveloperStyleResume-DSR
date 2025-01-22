import React from 'react';
import '../index.css';
import '../pages/css/Portfolio.css';

export default function Project({ title, stack, image, repo, featured }) {
    return (
        <div
            className={`portfolio-card ${featured ? 'featured-card' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <a href={repo} target="_blank" rel="noopener noreferrer" className="github-logo">
                <i className="fab fa-github"></i>
            </a>
            <div className="card-overlay">
                <h2>{title}</h2>
                <p>{stack}</p>
            </div>
        </div>
    );
}
