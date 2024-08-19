import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import signupImage from '../assets/signup-image.png';
import { signupUser } from '../services/api'; // Import your API function

const Signup: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== reenterPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const result = await signupUser({ firstName, lastName, email, password });
            console.log(result);
            if (result.success) {
                navigate('/login');
            } else {
                setError(result.message || 'Signup failed');
            }
        } catch (err) {
            setError('An error occurred during signup');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-image">
                <img src={signupImage} alt="Signup" />
            </div>
            <div className="auth-form-container">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    {error && <p className="auth-error">{error}</p>}
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
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
                    <div>
                        <label>Re-enter Password:</label>
                        <input
                            type="password"
                            value={reenterPassword}
                            onChange={(e) => setReenterPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Signup</button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
