import PropTypes from 'prop-types';

const CarItem = ({ car }) => {
  const {
    year,
    make,
    model,
    type,
    mileage,
    img,
    rentalPrice,
    address,
    rentalCompany,
    accessories,
  } = car;

  return (
    <>
      <img src={img} alt="auto" />
      <div>ICON</div>
      <h2>
        <span>{make}</span>
        <span>{model}</span>
        <span>{year}</span>
        <span>{rentalPrice}</span>
      </h2>
      <div>
        <span>{address}</span>

        <span>{rentalCompany}</span>
        <span>{type}</span>
        <span>{make}</span>
        <span>{mileage}</span>
        <span>{accessories}</span>
      </div>
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
