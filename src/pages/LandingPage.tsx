import React from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../assets/landing-image.png';
import logo from '../assets/logo.png'; // Import the logo image

const LandingPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <header style={{ backgroundColor: '#0073e6', padding: '20px 0', color: 'white' }}>
                <img src={logo} alt="Logo" style={{ width: '180px', marginBottom: '0px' }} /> {/* Logo Image */}
                <h1>Welcome to the Furever Pet App</h1>
                <p>Your one-stop solution for managing your pets' profiles</p>
                <></>
                <div>
                    <Link to="/login" style={{ margin: '0 10px', color: 'white', textDecoration: 'none', padding: '10px 20px', backgroundColor: '#005bb5', borderRadius: '4px' }}>
                        Login
                    </Link>
                    <Link to="/signup" style={{ margin: '0 10px', color: 'white', textDecoration: 'none', padding: '10px 20px', backgroundColor: '#005bb5', borderRadius: '4px' }}>
                        Signup
                    </Link>
                </div>
            </header>
            <main style={{ marginTop: '20px' }}>
                <img src={landingImage} alt="Landing" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px' }} />
                <section style={{ marginTop: '40px', marginBottom: '40px' }}>
                    <h2>About Our App</h2>
                    <p>Our app helps you manage your pets' profiles easily. You can add, view, update, and delete profiles with just a few clicks.</p>
                </section>
                <section>
                    <h2>Features</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}>Easy to use interface</li>
                        <li style={{ marginBottom: '10px' }}>Add and manage multiple pets</li>
                        <li style={{ marginBottom: '10px' }}>Secure login and signup</li>
                        <li style={{ marginBottom: '10px' }}>Profile photo uploads</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
