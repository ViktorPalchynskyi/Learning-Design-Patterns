import { DogImage } from '../../components/DogImage/DogImage';
import { withLoader } from '../../hoc/with-loader';

const DogImageContainer = ({ data }) => {
    console.log(data);

    return <DogImage dogs={data.message} />;
};

export default withLoader(
    DogImageContainer,
    'https://dog.ceo/api/breed/labrador/images/random/6'
);
