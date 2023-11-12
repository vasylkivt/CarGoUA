import PropTypes from 'prop-types';
import defaultImg from 'assets/icons/car.svg';
import {
  Button,
  CardTags,
  ConditionsTags,
  ConditionsTitle,
  Description,
  FeaturesTags,
  FeaturesTitle,
  Img,
  Title,
  Wrapper,
} from './CardModal.styled';

const CardModal = ({ car }) => {
  const {
    year,
    make,
    model,
    type,
    fuelConsumption,
    mileage,
    img,
    rentalPrice,
    accessories,
    engineSize,
    description,
    functionalities,
    rentalConditions,
  } = car;

  const address = car.address.split(', ');

  const rentalConditionsContent = rentalConditions
    .split(/(?=[A-Z])/)
    .map(item => {
      const matchNumber = item.match(/\d+/);

      if (matchNumber) {
        const age = matchNumber[0];
        const withoutNumber = item.replace(age, '');

        return (
          <p key={item}>
            {withoutNumber}
            <span className="accent-number">{age}</span>
          </p>
        );
      } else {
        return <p key={item}>{item}</p>;
      }
    });

  const handleImageError = event => {
    event.target.src = defaultImg;
  };

  return (
    <Wrapper>
      <Img src={img} alt={make + ' ' + model} onError={handleImageError} />

      <Title>
        <span>{make}</span>
        <span className="model">{model}</span>
        <span>{year}</span>
      </Title>

      <CardTags>
        <span>{address[address.length - 2]}</span>
        <span>{address[address.length - 1]}</span>
        <span>Year: {year}</span>
        <span>Type: {type}</span>
        <span>Fuel Consumption: {fuelConsumption}</span>
        <span>Engine Size: {engineSize}</span>
      </CardTags>

      <Description>{description}</Description>

      <FeaturesTitle> Accessories and functionalities:</FeaturesTitle>
      <FeaturesTags>
        {accessories.map(item => (
          <span key={item}>{item}</span>
        ))}
        {functionalities.map(item => (
          <span key={item}>{item}</span>
        ))}
      </FeaturesTags>

      <ConditionsTitle>Rental Conditions: </ConditionsTitle>
      <ConditionsTags>
        {rentalConditionsContent}
        <p>
          Mileage:{' '}
          <span className="accent-number">
            {mileage.toLocaleString('en-US')}
          </span>
        </p>
        <p>
          Price: <span className="accent-number">{rentalPrice}</span>
        </p>
      </ConditionsTags>

      <Button href="tel:+380730000000">Rental car</Button>
    </Wrapper>
  );
};
export default CardModal;

CardModal.propTypes = {
  car: PropTypes.shape({
    year: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
  }),
};
