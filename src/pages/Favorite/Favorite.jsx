import { Section } from 'components';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'src/redux/favorite/selectors';
import { CarList } from 'components';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const favoriteList = useSelector(selectFavorite);

  return (
    <Section>
      {favoriteList.length === 0 ? (
        <h2>
          The favorites list is empty, go to the{' '}
          <Link to="/catalog">catalog</Link> and add your preferences.
        </h2>
      ) : (
        <CarList carList={favoriteList} />
      )}
    </Section>
  );
};
export default Favorite;
