import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserSettings.css';

const UserSettings: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session or any relevant user data
        // localStorage.removeItem('userToken'); // Example if you use localStorage
        navigate('/');
    };

    return (
        <div className="user-settings">
            <h2>User Settings</h2>
            <form className="user-settings-form">
                {/* Add your form fields here for updating user information */}
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Current Password:</label>
                    <input type="password" name="currentPassword" />
                </div>
                <div>
                    <label>New Password:</label>
                    <input type="password" name="newPassword" />
                </div>
                <div>
                    <label>Re-enter New Password:</label>
                    <input type="password" name="reenterNewPassword" />
                </div>
                <button type="submit">Update</button>
            </form>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
    );
};

export default UserSettings;
