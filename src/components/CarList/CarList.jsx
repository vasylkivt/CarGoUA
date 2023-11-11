import { useSelector } from 'react-redux';
import { CarItem } from 'components';
import { selectCars } from '../../redux/car/selectors';
import { Item, List } from './CarList.styled';
// import { useSearchParams } from 'react-router-dom';

const CarList = () => {
  const cars = useSelector(selectCars);

  // const [searchParams] = useSearchParams();

  return (
    <List>
      {cars.map(car => (
        <Item key={car.id}>
          <CarItem car={car} />
        </Item>
      ))}
    </List>
  );
};
export default CarList;
