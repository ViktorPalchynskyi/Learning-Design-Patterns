import { WithHovering } from '../../hoc/with-hovering';
import { StyledButton, StyledText } from '../../hoc/with-styles';
import { useHover } from '../../hooks/useHover';
import style from './style.module.scss';

export const DogImage = ({ dogs }) => {
    const [hoverRef, hovering] = useHover();

    return (
        <>
            <div>
                <StyledText text="Dog images" />
                <StyledButton
                    onClick={() => console.log('Click')}
                    text="Click me!"
                />
                {hovering && <div>Hovering!</div>}
            </div>
            <div ref={hoverRef}>
                {dogs.map((d, i) => (
                    <img
                        className={style.image}
                        src={d}
                        key={i}
                        alt="Dog"
                    />
                ))}
            </div>
        </>
    );
};

// export default WithHovering(DogImage);
