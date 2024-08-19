import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDog, faPlus, faTasks, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png'; // Ensure this path is correct

const Layout: React.FC = () => {
    return (
        <div>
            <header style={{ backgroundColor: '#0073e6', padding: '10px 0', textAlign: 'center' }}>
                <Link to="/home">
                    <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
                </Link>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
                        <li style={{ margin: '0 10px' }}>
                            <Link
                                to="/home"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '8px 20px',
                                    backgroundColor: '#0073e6',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
                                Home
                            </Link>
                        </li>
                        <li style={{ margin: '0 10px' }}>
                            <Link
                                to="/add-pet"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '8px 20px',
                                    backgroundColor: '#0073e6',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
                                Add Pet
                            </Link>
                        </li>
                        <li style={{ margin: '0 10px' }}>
                            <Link
                                to="/pets"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '8px 20px',
                                    backgroundColor: '#0073e6',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <FontAwesomeIcon icon={faDog} style={{ marginRight: '5px' }} />
                                View Pets
                            </Link>
                        </li>
                        <li style={{ margin: '0 10px' }}>
                            <Link
                                to="/task-todo"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '8px 20px',
                                    backgroundColor: '#0073e6',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <FontAwesomeIcon icon={faTasks} style={{ marginRight: '5px' }} />
                                Task To-Do
                            </Link>
                        </li>
                        <li style={{ margin: '0 10px' }}>
                            <Link
                                to="/settings"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    padding: '8px 20px',
                                    backgroundColor: '#0073e6',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <FontAwesomeIcon icon={faCog} style={{ marginRight: '5px' }} />
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
