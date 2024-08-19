import React, { useContext, useState } from 'react';
import { PetContext } from '../../context/PetContext';

const AddPetForm: React.FC = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [error, setError] = useState('');
    const { addPet } = useContext(PetContext)!;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !age || !breed) {
            setError('All fields are required');
            return;
        }

        const newPet = {
            id: Date.now(),
            name,
            age: Number(age),
            breed,
            photo: photo ? URL.createObjectURL(photo) : undefined,
        };
        addPet(newPet);
        setName('');
        setAge('');
        setBreed('');
        setPhoto(null);
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
            </div>
            <div>
                <label>Breed:</label>
                <input
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
            </div>
            <div>
                <label>Photo:</label>
                <input
                    type="file"
                    onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
            </div>
            <button type="submit" style={{ margin: '5px', padding: '5px 10px', backgroundColor: '#0073e6', color: 'white', border: 'none', cursor: 'pointer' }}>Add Pet</button>
        </form>
    );
};

export default AddPetForm;
