// import { WithHovering } from '../../hoc/with-hovering';
import { StyledButton, StyledText } from '../../hoc/with-styles';
import { useHover } from '../../hooks/useHover';
import style from './style.module.scss';
import { Title } from '../Title/Title';
import { FlyoutMenu } from '../FlyoutMenu/FlyoutMenu';

export const DogImage = ({ dogs }) => {
    const [hoverRef, hovering] = useHover();

    return (
        <>
            <Title render={() => <h2>Dog images</h2>} />

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
                    <div key={i}>
                        <FlyoutMenu />
                        <img
                            className={style.image}
                            src={d}
                            alt="Dog"
                        />
                    </div>
                ))}
            </div>
            {/* <Title render={() => <h2>✨ First render prop! ✨</h2>} />
            <Title
                render={() => <h3>🔥 Second render prop! 🔥</h3>}
            />
            <Title render={() => <h4>🚀 Third render prop! 🚀</h4>} /> */}
        </>
    );
};

// export default WithHovering(DogImage);
