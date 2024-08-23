import { useState } from 'react';
import { Input } from '../../components/Input/Input';

export const InputContainer = ({ children }) => {
    const [value, setValue] = useState('');

    return (
        <Input
            value={value}
            setValue={setValue}
            children={children.bind(null, value)}
        />
    );
};
