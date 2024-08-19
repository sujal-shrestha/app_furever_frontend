import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import AddPet from './pages/AddPet';
import ViewPets from './pages/ViewPets';
import PetProfilePage from './pages/PetProfilePage';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import UserSettings from './pages/UserSettings';
import TaskToDo from './pages/TaskToDo';
import { PetProvider } from './context/PetContext';

const App: React.FC = () => {
    return (
        <PetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route element={<Layout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/add-pet" element={<AddPet />} />
                        <Route path="/pets" element={<ViewPets />} />
                        <Route path="/pets/:id" element={<PetProfilePage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/settings" element={<UserSettings />} />
                        <Route path="/task-todo" element={<TaskToDo />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </PetProvider>
    );
};

export default App;
