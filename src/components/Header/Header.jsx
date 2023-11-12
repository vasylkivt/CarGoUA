import { Navigation, Container, Logotype } from 'components';
import { StyledHeader, HeaderWrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <StyledHeader>
          <Logotype />
          <Navigation />
        </StyledHeader>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
