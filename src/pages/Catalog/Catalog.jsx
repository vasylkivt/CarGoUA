import { Section, CarList, BtnLoadMore } from 'components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars, fetchCarsByPage } from 'src/redux/car/operations';
import { useSearchParams } from 'react-router-dom';
import { selectCars } from 'src/redux/car/selectors';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [currentCarList, setCurrentCarList] = useState([]);
  const cars = useSelector(selectCars);

  const [filters] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters.size === 0) {
      setCurrentCarList(cars);
    } else {
      setCurrentCarList(cars);
      //!!
    }
  }, [cars, filters.size]);

  useEffect(() => {
    if (filters.size === 0) {
      dispatch(fetchCarsByPage({ page, limit })).then(({ payload }) => {
        if (payload.length === 0 || payload.length < limit) {
          setShowLoadMore(false);
        }
      });
    } else {
      dispatch(fetchAllCars());
      setShowLoadMore(false);
      setPage(1);
    }
  }, [dispatch, filters, limit, page]);

  return (
    <Section>
      <CarList carList={currentCarList} />
      {showLoadMore && (
        <BtnLoadMore onClick={() => setPage(prev => prev + 1)}>
          Load More
        </BtnLoadMore>
      )}
    </Section>
  );
};
export default Catalog;
