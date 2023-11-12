import { Section } from 'components';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'src/redux/favorite/selectors';
import { CarList } from 'components';
import {
  CatalogLink,
  EmptyFavoritesMessage,
  InstructionMessage,
} from './Favorite.styled';

const Favorite = () => {
  const favoriteList = useSelector(selectFavorite);

  return (
    <Section>
      {favoriteList.length === 0 ? (
        <>
          <EmptyFavoritesMessage>
            The favorites list is empty
          </EmptyFavoritesMessage>
          <InstructionMessage>
            Go to the
            <CatalogLink to="/catalog"> Catalog</CatalogLink> page
          </InstructionMessage>
          <InstructionMessage>And add your preferences.</InstructionMessage>
        </>
      ) : (
        <CarList carList={favoriteList} />
      )}
    </Section>
  );
};
export default Favorite;
