import PropTypes from 'prop-types';

import { ImageWrapper, Title, CardInfo, Button } from './CarItem.styled';
import defaultImg from '../../assets/car.svg';
import HeartIcon from '../../assets/heart.svg?react';

const CarItem = ({ car }) => {
  const {
    year,
    make,
    model,
    type,
    mileage,
    img,
    rentalPrice,
    rentalCompany,
    accessories,
  } = car;

  const handleImageError = event => {
    event.target.src = defaultImg;
  };

  const address = car.address.split(', ');

  return (
    <>
      <ImageWrapper>
        <img src={img} alt={make + ' ' + model} onError={handleImageError} />
        <HeartIcon width={18} height={18} />
      </ImageWrapper>

      <Title>
        <span>{make}</span>
        <span className="model">{model}</span>
        <span>{year}</span>
        <span>{rentalPrice}</span>
      </Title>

      <CardInfo>
        <span>{address[address.length - 2]}</span>
        <span>{address[address.length - 1]}</span>
        <span>{rentalCompany}</span>
        <span>{type}</span>
        <span>{model}</span>
        <span>{mileage}</span>
        <span>{accessories[0]}</span>
      </CardInfo>

      <Button>Learn more</Button>
    </>
  );
};
export default CarItem;

CarItem.propTypes = {
  car: PropTypes.shape({
    year: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
