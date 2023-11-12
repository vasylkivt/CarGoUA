import brands from 'src/helpers/staticData/brands.json';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
import { resetFilter, setFilter } from '../../redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  ErrorMessage,
  InputLabel,
  InputWrapper,
  Wrapper,
} from './Filters.styled';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { selectFilter } from '../../redux/filter/selectors';

const Filters = ({ handleSubmit }) => {
  const [mileage, setMileage] = useState({
    mileageFrom: '',
    mileageTo: '',
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
  for (let i = 10; i <= 1000; i += 10) {
    priseList.push(i);
  }

  const formatTextPriseInput = value => `To ${value}$`;

  const handleChange = evt => {
    const { value, name } = evt.target;

    if (value.length > 5) {
      return;
    }

    if (/^[0-9]*$/.test(value) || value === '') {
      setMileage(prev => ({
        ...prev,
        [name]: value,
      }));
      dispatch(setFilter({ [name]: value, isFilters: true }));
      setShowErrorMessage(false);
    } else {
      setErrorMessage('Enter a  number');
      setShowErrorMessage(true);
    }
  };

  const handleSearch = () => {
    if (+filter.mileageTo < +filter.mileageFrom && +filter.mileageTo !== 0) {
      setErrorMessage('Enter a larger number than "From"');
      setShowErrorMessage(true);
      return;
    }
    setShowErrorMessage(false);
    handleSubmit();
  };

  const formatMileage = value => {
    return value;
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
        inputWidth="140px"
        formatterText={formatTextPriseInput}
      />
      <div>
        <InputLabel>Сar mileage / km</InputLabel>
        <div style={{ display: 'flex', position: 'relative' }}>
          <InputWrapper inputType="from">
            <label htmlFor="mileageFrom">From</label>
            <input
              autoComplete="off"
              type="text"
              name="mileageFrom"
              onChange={handleChange}
              value={formatMileage(mileage.mileageFrom)}
              id="mileageFrom"
            />
          </InputWrapper>
          <InputWrapper inputType="to">
            <label htmlFor="mileageTo">To</label>
            <input
              autoComplete="off"
              type="text"
              name="mileageTo"
              onChange={handleChange}
              value={formatMileage(mileage.mileageTo)}
              id="mileageTo"
            />
          </InputWrapper>
          {showErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
      <Button onClick={handleSearch} type="button">
        Search
      </Button>
    </Wrapper>
  );
};
export default Filters;

Filters.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
