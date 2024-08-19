import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';
import loginImage from '../assets/login-image.png';
import { loginUser, resetPassword } from '../services/api'; // Import your API function

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [currentEmail, setCurrentEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reenterNewPassword, setReenterNewPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            setEmail(rememberedEmail);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }

        try {
            const result = await loginUser(email, password);
            if (result) {
                navigate('/home');
            } else {
                setError('Login failed');
            }
        } catch (err) {
            setError('Wrong User Credentials. Please try again.');
        }
    };

    const handleResetSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== reenterNewPassword) {
            setError('New passwords do not match');
            return;
        }

        console.log('Email:', currentEmail);
        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);

        try {
            const result = await resetPassword(currentEmail, currentPassword, newPassword);
            if (result) {
                setShowResetModal(false);
                alert('Password reset successfully');
            } else {
                setError('Password reset failed');
            }
        } catch (err) {
            if (err instanceof Error && err.message.includes('Failed to fetch')) {
                setError('Failed to reset password due to a network or CORS error.');
            } else {
                setError('An error occurred during password reset');
            }
        }
    };


    return (
        <div className="auth-container">
            <div className="auth-image">
                <img src={loginImage} alt="Login" />
            </div>
            <div className="auth-form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    {error && <p className="auth-error">{error}</p>}
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <button type="submit">Login</button>
                    <button type="button" onClick={() => setShowResetModal(true)} className="forgot-password-link">
                        Forgot Password?
                    </button>
                </form>
                <p>
                    Don't have an account? <Link to="/signup">Create an account</Link>
                </p>

                {showResetModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setShowResetModal(false)}>
                                &times;
                            </span>
                            <h2>Reset Password</h2>
                            <form onSubmit={handleResetSubmit} className="auth-form">
                                {error && <p className="auth-error">{error}</p>}
                                <div>
                                    <label>Current Email:</label>
                                    <input
                                        type="email"
                                        value={currentEmail}
                                        onChange={(e) => setCurrentEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Current Password:</label>
                                    <input
                                        type="password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>New Password:</label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Re-enter New Password:</label>
                                    <input
                                        type="password"
                                        value={reenterNewPassword}
                                        onChange={(e) => setReenterNewPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit">Reset Password</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
