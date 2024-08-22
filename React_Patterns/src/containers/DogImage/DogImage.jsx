import { useEffect, useState } from 'react';
import { DogImage } from '../../components/DogImage/DogImage';

export const DogImageContainer = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchDogs = async () => {
            const res = await fetch(
                'https://dog.ceo/api/breed/labrador/images/random/6'
            );
            const { status, message } = await res.json();

            if (status === 'success') {
                setDogs(message);
            }
        };

        fetchDogs();
    }, []);

    return <DogImage dogs={dogs} />;
};
