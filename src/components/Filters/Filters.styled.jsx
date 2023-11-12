import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  padding: 12px 44px;
  height: 48px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 12px;

  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
