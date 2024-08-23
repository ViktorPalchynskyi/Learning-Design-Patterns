import { useEffect, useState } from 'react';

export const withLoader = (Component, url) => {
    const ComponentWithStyles = (props) => {
        const [data, setData] = useState();

        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch(url);
                const data = await res.json();

                setData(data);
            };

            fetchData();
        }, []);

        if (!data) {
            return <p>...Loading</p>;
        }

        return <Component {...props} data={data} />;
    };

    return ComponentWithStyles;
};
