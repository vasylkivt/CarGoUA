import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;

  :hover,
  :hover svg {
    color: ${({ theme }) => theme.colors.accent};
  }
  transition: color 250ms ease-in-out;

  svg {
    transition: color 250ms ease-in-out;
    width: 34px;
    height: 34px;
  }
`;
