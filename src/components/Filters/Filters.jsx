import brands from 'src/helpers/staticData/brands.json';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
import { resetFilter } from '../../redux/filter/slice';
import { useDispatch } from 'react-redux';
import { Wrapper } from './Filters.styled';
import PropTypes from 'prop-types';

const Filters = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const priseList = [];
  for (let i = 10; i <= 200; i += 10) {
    priseList.push(i);
  }
  return (
    <Wrapper>
      <FilterWrapper
        filterName={'brand'}
        defaultValue="Enter the text"
        options={brands}
      />
      <FilterWrapper
        filterName="price"
        defaultValue="To $"
        options={priseList}
      />
      <button
        onClick={() => {
          dispatch(resetFilter());
        }}
        type="button"
      >
        reset
      </button>
      <button onClick={handleSubmit} type="button">
        submit
      </button>
    </Wrapper>
  );
};
export default Filters;

Filters.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
