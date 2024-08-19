import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PetContext } from '../context/PetContext';
import './TaskToDo.css';

interface Task {
    petId: number;
    petName: string;
    activity: string;
    date: Date;
    completed: boolean;
}

const TaskToDo: React.FC = () => {
    const { pets } = useContext(PetContext)!;
    const [selectedPet, setSelectedPet] = useState<number | null>(null);
    const [activity, setActivity] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);

    const handlePetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPet(e.target.value === '' ? null : parseInt(e.target.value, 10));
    };

    const handleActivityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setActivity(e.target.value);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedPet && activity && selectedDate) {
            const petName = pets.find(pet => pet.id === selectedPet)?.name || '';
            const newTask: Task = { petId: selectedPet, petName, activity, date: selectedDate, completed: false };
            setTasks([...tasks, newTask]);
            // Clear form
            setSelectedPet(null);
            setActivity('');
            setSelectedDate(null);
        } else {
            alert('Please fill out all fields');
        }
    };

    const toggleTaskCompletion = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="task-container">
            <div className="task-form-section">
                <h2>Task To-Do</h2>
                <form onSubmit={handleSubmit} className="task-form">
                    <div>
                        <label>Select Pet:</label>
                        <select
                            value={selectedPet ?? ''}
                            onChange={handlePetChange}
                        >
                            <option value="">Select a pet</option>
                            {pets.map((pet) => (
                                <option key={pet.id} value={pet.id}>
                                    {pet.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Activity:</label>
                        <select value={activity} onChange={handleActivityChange}>
                            <option value="">Select an activity</option>
                            <option value="food">Food</option>
                            <option value="bath">Bath</option>
                            <option value="checkup">Checkup</option>
                        </select>
                    </div>
                    <div>
                        <label>Select Time:</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            placeholderText="Select a time"
                            popperPlacement="top-start"
                        />
                    </div>
                    <button type="submit">Add Task</button>
                </form>
            </div>
            <div className="task-list-section">
                <h2>Tasks</h2>
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index} className={task.completed ? 'completed' : ''}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(index)}
                            />
                            <strong>{task.petName}</strong> - {task.activity} at {task.date.toLocaleString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskToDo;
