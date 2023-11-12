import brands from 'src/helpers/staticData/brands.json';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
import { resetFilter, setFilter } from '../../redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, InputLabel, InputWrapper, Wrapper } from './Filters.styled';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { selectFilter } from '../../redux/filter/selectors';

const Filters = ({ handleSubmit }) => {
  const [mileage, setMileage] = useState({
    mileageFrom: '',
    mileageTo: '',
  });
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  useEffect(() => {
    const mileageFrom = filter.mileageFrom === 0 ? '' : filter.mileageFrom;
    const mileageTo = filter.mileageTo === 0 ? '' : filter.mileageTo;
    setMileage({
      mileageFrom,
      mileageTo,
    });
  }, [filter]);

  const priseList = [];
  for (let i = 10; i <= 200; i += 10) {
    priseList.push(i);
  }

  const formatTextPriseInput = value => `To ${value}$`;

  const handleChange = evt => {
    const { value, name } = evt.target;

    if (/^[0-9]*$/.test(value) || value === '') {
      setMileage(prev => ({
        ...prev,
        [name]: value,
      }));
      dispatch(setFilter({ [name]: value, isFilters: true }));
    }
  };

  return (
    <Wrapper>
      <FilterWrapper
        filterName={'brand'}
        defaultValue="Enter the text"
        options={brands}
        label={'Car brand'}
        inputWidth="224px"
      />
      <FilterWrapper
        filterName="price"
        defaultValue="To $"
        options={priseList}
        label={'Price/ 1 hour'}
        inputWidth="125px"
        formatterText={formatTextPriseInput}
      />
      <div>
        <InputLabel>Сar mileage / km</InputLabel>
        <div style={{ display: 'flex' }}>
          <InputWrapper inputType="from">
            <label htmlFor="mileageFrom">From</label>
            <input
              type="text"
              name="mileageFrom"
              onChange={handleChange}
              value={mileage.mileageFrom}
              id="mileageFrom"
            />
          </InputWrapper>
          <InputWrapper inputType="to">
            <label htmlFor="mileageTo">To</label>
            <input
              type="text"
              name="mileageTo"
              onChange={handleChange}
              value={mileage.mileageTo}
              id="mileageTo"
            />
          </InputWrapper>
        </div>
      </div>
      <Button
        onClick={() => {
          dispatch(resetFilter());
        }}
        type="button"
      >
        Clear
      </Button>
      <Button onClick={handleSubmit} type="button">
        Search
      </Button>
    </Wrapper>
  );
};
export default Filters;

Filters.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
