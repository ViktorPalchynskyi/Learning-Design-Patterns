import React from 'react';

export const Input = ({ value, children, setValue }) => {
    return (
        <>
            <input
                value={value}
                type="text"
                placeholder="Temp in °C"
                onChange={(e) => setValue(e.target.value)}
            />
            {children(value)}
        </>
    );
};
