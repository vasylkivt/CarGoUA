import PropTypes from 'prop-types';
import { useState } from 'react';

import defaultImg from 'assets/icons/car.svg';
import HeartIcon from 'assets/icons/heart.svg?react';
import { CardModal, ModalWindow } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'src/redux/favorite/selectors';
import { addToFavorite, deleteFromFavorite } from 'src/redux/favorite/slice';
import {
  Button,
  ButtonHeart,
  CardInfo,
  ImageWrapper,
  Title,
} from './CarItem.styled';

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

  const [onShowModal, setOnShowModal] = useState(false);
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavorite);

  const isOnFavoriteList = favoriteList.find(({ id }) => id === car.id);

  const handleImageError = event => {
    event.target.src = defaultImg;
  };

  const address = car.address.split(', ');

  const handlerClick = () => {
    if (isOnFavoriteList) {
      dispatch(deleteFromFavorite(car.id));
    } else {
      dispatch(addToFavorite(car));
    }
  };

  return (
    <>
      <ImageWrapper>
        <img src={img} alt={make + ' ' + model} onError={handleImageError} />

        <ButtonHeart isOnFavoriteList={isOnFavoriteList} onClick={handlerClick}>
          <HeartIcon width={18} height={18} />
        </ButtonHeart>
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

      <Button onClick={() => setOnShowModal(true)}>Learn more</Button>

      <ModalWindow onClose={() => setOnShowModal(false)} onShow={onShowModal}>
        <CardModal car={car} />
      </ModalWindow>
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
    id: PropTypes.string.isRequired,
  }),
};
