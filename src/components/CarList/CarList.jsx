import { CarItem } from 'components';

import { Item, List } from './CarList.styled';
import { PropTypes } from 'prop-types';

const CarList = ({ carList }) => {
  return (
    <List>
      {carList.map(car => (
        <Item key={car.id}>
          <CarItem car={car} />
        </Item>
      ))}
    </List>
  );
};
export default CarList;

CarList.propTypes = {
  carList: PropTypes.array.isRequired,
};
