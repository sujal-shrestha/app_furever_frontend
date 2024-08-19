import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image

const Dashboard: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} /> {/* Logo Image */}
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard. Manage your pets here.</p>
        </div>
    );
};

export default Dashboard;
