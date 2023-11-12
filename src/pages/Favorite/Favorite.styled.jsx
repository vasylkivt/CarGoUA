import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// Define styled components
export const EmptyFavoritesMessage = styled.p`
  font-size: 22px;

  margin-bottom: 10px;
`;

export const CatalogLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const InstructionMessage = styled.p`
  font-size: 20px;
`;
