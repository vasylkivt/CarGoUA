import { FooterWrapper, StyledFooter } from './Footer.styled';
import { Container, Logotype } from 'components';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <StyledFooter>
          <Logotype />
          2023 @ All rights reserved.
        </StyledFooter>
      </Container>
    </FooterWrapper>
  );
};
export default Footer;
