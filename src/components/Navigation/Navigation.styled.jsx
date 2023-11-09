import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textGrey_100};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
