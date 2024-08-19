import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PetContext } from '../context/PetContext';
import UpdatePetForm from '../components/UpdatePet/UpdatePetForm';
import './ViewPets.css';

const ViewPets: React.FC = () => {
    const { pets, deletePet } = useContext(PetContext)!;
    const [updatingPet, setUpdatingPet] = useState<null | number>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterAge, setFilterAge] = useState('');
    const [filterBreed, setFilterBreed] = useState('');

    const filteredPets = pets.filter(pet => {
        return (
            pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterAge ? pet.age === parseInt(filterAge) : true) &&
            (filterBreed ? pet.breed.toLowerCase().includes(filterBreed.toLowerCase()) : true)
        );
    });

    return (
        <div>
            <h1>View Pets</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Filter by age"
                    value={filterAge}
                    onChange={(e) => setFilterAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Filter by breed"
                    value={filterBreed}
                    onChange={(e) => setFilterBreed(e.target.value)}
                />
            </div>
            <ul>
                {filteredPets.map((pet) => (
                    <li key={pet.id}>
                        <Link to={`/pets/${pet.id}`}>{pet.name}</Link>, {pet.age} years old, {pet.breed}
                        <button onClick={() => deletePet(pet.id)}>Delete</button>
                        <button onClick={() => setUpdatingPet(pet.id)}>Update</button>
                        {updatingPet === pet.id && (
                            <UpdatePetForm pet={pet} onClose={() => setUpdatingPet(null)} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewPets;
