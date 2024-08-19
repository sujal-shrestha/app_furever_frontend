import React, { useContext, useState } from 'react';
import { PetContext } from '../../context/PetContext';

interface UpdatePetFormProps {
    pet: {
        id: number;
        name: string;
        age: number;
        breed: string;
        photo?: string;
    };
    onClose: () => void;
}

const UpdatePetForm: React.FC<UpdatePetFormProps> = ({ pet, onClose }) => {
    const [name, setName] = useState(pet.name);
    const [age, setAge] = useState(pet.age.toString());
    const [breed, setBreed] = useState(pet.breed);
    const [photo, setPhoto] = useState<File | null>(null);
    const { updatePet } = useContext(PetContext)!;

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedPet = {
            ...pet,
            name,
            age: Number(age),
            breed,
            photo: photo ? URL.createObjectURL(photo) : pet.photo,
        };
        updatePet(updatedPet);
        onClose();
    };

    return (
        <form onSubmit={handleUpdate} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
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
            <button type="submit" style={{ margin: '5px', padding: '5px 10px', backgroundColor: '#0073e6', color: 'white', border: 'none', cursor: 'pointer' }}>Update Pet</button>
            <button type="button" onClick={onClose} style={{ margin: '5px', padding: '5px 10px', backgroundColor: '#0073e6', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>
        </form>
    );
};

export default UpdatePetForm;
