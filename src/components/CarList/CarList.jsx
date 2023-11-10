import { useSelector } from 'react-redux';
import { CarItem } from 'components';
import { selectCars } from '../../redux/car/selectors';
// import { useSearchParams } from 'react-router-dom';

const CarList = () => {
  const cars = useSelector(selectCars);

  // const [searchParams] = useSearchParams();

  return (
    <ul>
      {cars.map(car => (
        <li key={car.id}>
          <CarItem car={car} />
        </li>
      ))}
    </ul>
  );
};
export default CarList;
