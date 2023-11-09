import { Navigation, Container } from 'components';
import { StyledHeader, HeaderWrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <StyledHeader>
          <p>LOGO</p>
          <Navigation />
        </StyledHeader>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
