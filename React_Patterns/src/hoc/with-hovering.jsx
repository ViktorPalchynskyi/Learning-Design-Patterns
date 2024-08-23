import { useState } from 'react';

export const WithHovering = (Component) => {
    const ComponentWithHovering = (props) => {
        const [hovering, setHovering] = useState(false);

        return (
            <Component
                {...props}
                setHovering={setHovering}
                hovering={hovering}
            />
        );
    };

    return ComponentWithHovering;
};
