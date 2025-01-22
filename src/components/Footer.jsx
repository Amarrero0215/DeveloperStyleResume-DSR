import React from 'react';
import '../index.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://github.com/Amarrero0215" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" alt="github link for Amarrero0215"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" alt="Placeholder link for actual account link"></i>
                </a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-share-alt" alt="Placeholder link for copying this page URL for sharing"></i>
                </a>
            </div>
        </footer>
    );
}
