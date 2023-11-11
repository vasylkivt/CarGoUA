import { useSelector } from 'react-redux';
import { CarItem } from 'components';
import { selectCars } from '../../redux/car/selectors';
import { Item, List } from './CarList.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CarList = () => {
  const [currentCarList, setCurrentCarList] = useState([]);
  const cars = useSelector(selectCars);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size === 0) {
      setCurrentCarList(cars);
    } else {
      setCurrentCarList(cars);
    }
  }, [cars, searchParams.size]);

  return (
    <List>
      {currentCarList.map(car => (
        <Item key={car.id}>
          <CarItem car={car} />
        </Item>
      ))}
    </List>
  );
};
export default CarList;
