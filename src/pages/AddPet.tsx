import React from 'react';
import AddPetForm from '../components/AddPet/AddPetForm';

const AddPet: React.FC = () => {
    return (
        <div>
            <h1>Add a New Pet</h1>
            <AddPetForm />
        </div>
    );
};

export default AddPet;
