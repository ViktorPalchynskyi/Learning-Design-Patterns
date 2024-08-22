export const DogImage = ({ dogs }) => {
    return (
        <>
            {dogs.map((d, i) => (
                <img src={d} key={i} alt="Dog" />
            ))}
        </>
    );
};
