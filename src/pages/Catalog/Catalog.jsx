import { Section, CarList, BtnLoadMore } from 'components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCars, fetchCarsByPage } from 'src/redux/car/operations';
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
      <CarList />
      {showLoadMore && (
        <BtnLoadMore onClick={() => setPage(prev => prev + 1)}>
          Load More
        </BtnLoadMore>
      )}
    </Section>
  );
};
export default Catalog;
