import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PetContext } from '../context/PetContext';
import PetProfile from '../components/PetProfile/PetProfile';

type Params = {
    id: string | undefined;
};

const PetProfilePage: React.FC = () => {
    const { id } = useParams<Params>();
    const { pets } = useContext(PetContext)!;

    if (!id) {
        return <p>Invalid pet ID</p>;
    }

    const pet = pets.find(p => p.id === parseInt(id, 10));

    if (!pet) {
        return <p>Pet not found</p>;
    }

    return <PetProfile pet={pet} />;
};

export default PetProfilePage;
