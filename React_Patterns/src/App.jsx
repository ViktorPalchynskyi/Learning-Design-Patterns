import { Title } from './components/Title/Title';
import DogImageContainer from './containers/DogImage/DogImage';
import { InputContainer } from './containers/Input/Input';
import { Kelvin } from './components/Kelvin/Kelvin';
import { Fahrenheit } from './components/Fahrenheit/Fahrenheit';

function App() {
    const random = Math.round(Math.random * 10);

    return (
        <>
            <Title render={() => <h1>Hello there</h1>} />
            {random > 5 ? (
                <InputContainer>
                    {(value) => (
                        <>
                            <Kelvin value={value} />
                            <Fahrenheit value={value} />
                        </>
                    )}
                </InputContainer>
            ) : (
                <DogImageContainer />
            )}
        </>
    );
}

export default App;
