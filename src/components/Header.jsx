import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

export default function Header() {
    return (
        <header className="main-header">
        <h1 className="site-title">Marrero</h1>
        <nav>
            <ul className="nav-links">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Contact Me
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
}