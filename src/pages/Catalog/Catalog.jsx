import { BtnLoadMore, CarList, Filters, Section } from 'components';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllCars, fetchCarsByPage } from 'src/redux/car/operations';
import { selectCars } from 'src/redux/car/selectors';
import { filterCars } from '../../helpers/filterCars';
import { selectFilter, selectIsFilters } from '../../redux/filter/selectors';
import { NotificationNotFound } from './Catalog.styled';
import { selectIsLoading } from '../../redux/car/selectors';

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [currentCarList, setCurrentCarList] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const isLoading = useSelector(selectIsLoading);

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

  const handleSubmit = async () => {
    if (!isFilters) {
      return;
    }

    const { payload } = await dispatch(fetchAllCars());
    setShowLoadMore(false);
    setPage(1);

    if (isFilters) {
      const filteredCarList = filterCars(payload, filters);
      setCurrentCarList(filteredCarList);
    }
  };

  return (
    <Section>
      <Filters handleSubmit={handleSubmit} />
      {currentCarList.length === 0 && !isLoading && (
        <>
          <NotificationNotFound>
            🚫 Apologies, we couldn&apos;t find any ads that match your
            search...🥲
          </NotificationNotFound>
          <NotificationNotFound>
            Please adjust the filter parameters and try again! 🔍
          </NotificationNotFound>
        </>
      )}
      <CarList carList={currentCarList} />
      {showLoadMore && !isLoading && (
        <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
      )}
    </Section>
  );
};
