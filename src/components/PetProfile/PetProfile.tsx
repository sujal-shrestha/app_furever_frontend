import React from 'react';

interface PetProfileProps {
    pet: {
        id: number;
        name: string;
        age: number;
        breed: string;
        photo?: string;
    };
}

const PetProfile: React.FC<PetProfileProps> = ({ pet }) => {
    return (
        <div>
            <h1>{pet.name}</h1>
            {pet.photo && <img src={pet.photo} alt={pet.name} style={{ width: '200px', height: '200px' }} />}
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
        </div>
    );
};

export default PetProfile;
