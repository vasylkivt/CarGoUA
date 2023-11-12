import LogotypeSvg from 'assets/icons/car.svg?react';
import { StyledLink } from './Logotype.styled';

const Logotype = () => {
  return (
    <StyledLink to="/">
      <LogotypeSvg />
      CarGoUA
    </StyledLink>
  );
};
export default Logotype;
