import { Section, CarList } from 'components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCars, fetchCarsByPage } from '../../redux/car/operations';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [filters] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters.size !== 0) {
      dispatch(fetchAllCars());
      setShowLoadMore(false);
      setPage(1);
    } else {
      dispatch(fetchCarsByPage({ page, limit })).then(({ payload }) => {
        if (payload.length === 0 || payload.length < limit) {
          setShowLoadMore(false);
        }
      });
    }
  }, [dispatch, filters, limit, page]);

  return (
    <Section>
      <CarList limit={limit} setPage={setPage} />
      {showLoadMore && (
        <button onClick={() => setPage(prev => prev + 1)}>Load More</button>
      )}
    </Section>
  );
};
export default Catalog;
