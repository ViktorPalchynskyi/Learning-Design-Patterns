import { useEffect, useRef, useState } from 'react';

export const useHover = () => {
    const [hovering, setHovering] = useState(false);
    const ref = useRef(null);

    const handleMouseOver = () => setHovering(true);
    const handleMouseOut = () => setHovering(false);

    useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);

            return () => {
                node.removeEventListener(
                    'mouseover',
                    handleMouseOver
                );
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [ref.current]);

    return [ref, hovering];
};
