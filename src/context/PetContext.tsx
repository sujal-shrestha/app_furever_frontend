import React, { createContext, useState, ReactNode } from 'react';

interface Pet {
    id: number;
    name: string;
    age: number;
    breed: string;
    photo?: string;
}

interface PetContextProps {
    pets: Pet[];
    addPet: (pet: Pet) => void;
    updatePet: (updatedPet: Pet) => void;
    deletePet: (id: number) => void;
}

const PetContext = createContext<PetContextProps | undefined>(undefined);

const PetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [pets, setPets] = useState<Pet[]>([]);

    const addPet = (pet: Pet) => {
        setPets(prevPets => [...prevPets, pet]);
    };

    const updatePet = (updatedPet: Pet) => {
        setPets(prevPets =>
            prevPets.map(pet => (pet.id === updatedPet.id ? updatedPet : pet))
        );
    };

    const deletePet = (id: number) => {
        setPets(prevPets => prevPets.filter(pet => pet.id !== id));
    };

    return (
        <PetContext.Provider value={{ pets, addPet, updatePet, deletePet }}>
            {children}
        </PetContext.Provider>
    );
};

export { PetContext, PetProvider };
