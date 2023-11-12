import { BtnLoadMore, CarList, Filters, Section } from 'components';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllCars, fetchCarsByPage } from 'src/redux/car/operations';
import { selectCars } from 'src/redux/car/selectors';
import { filterCars } from '../../helpers/filterCars';
import { selectFilter, selectIsFilters } from '../../redux/filter/selectors';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [currentCarList, setCurrentCarList] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const cars = useSelector(selectCars);

  const dispatch = useDispatch();
  const isFilters = useSelector(selectIsFilters);
  const filters = useSelector(selectFilter);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCarsByPage({}));
    }
  }, [cars.length, dispatch]);

  useEffect(() => {
    if (!isFilters) {
      setCurrentCarList(cars);
      setIsFirstRender(false);
    } else {
      if (isFirstRender) {
        const filteredCarList = filterCars(cars, filters);
        setCurrentCarList(filteredCarList);
        setShowLoadMore(false);
        setPage(1);
        setIsFirstRender(false);
      }
    }
  }, [cars, filters, isFilters, isFirstRender]);

  const handleLoadMore = () => {
    setPage(prev => {
      dispatch(fetchCarsByPage({ page: page + 1, limit })).then(
        ({ payload }) => {
          if (payload.length === 0 || payload.length < limit) {
            setShowLoadMore(false);
          }
        },
      );
      return prev + 1;
    });
  };

  const handleSubmit = () => {
    dispatch(fetchAllCars());
    setShowLoadMore(false);
    setPage(1);

    if (isFilters) {
      const filteredCarList = filterCars(cars, filters);
      setCurrentCarList(filteredCarList);
    }
  };

  return (
    <Section>
      <Filters handleSubmit={handleSubmit} />

      <CarList carList={currentCarList} />
      {showLoadMore && (
        <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
      )}
    </Section>
  );
};
export default Catalog;
