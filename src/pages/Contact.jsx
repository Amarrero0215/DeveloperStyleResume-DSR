// src/pages/Contact.jsx
import React, { useState } from 'react';
import './css/Contact.css';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Your email is invalid.');
        } else {
            setError('');
            alert('Message sent!');
        }
    };

    return (
        <div className="section">
            <h1 className="title">Contact</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Your name" required />

                <label htmlFor="email">Email address:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                />
                {error && <p className="error-message">{error}</p>}

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
