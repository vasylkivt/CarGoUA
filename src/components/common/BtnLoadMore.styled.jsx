import styled from '@emotion/styled';

export const BtnLoadMore = styled.button`
  position: relative;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: transparent;
  padding: 10px;

  color: ${({ theme }) => theme.colors.accent};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: calc(100% - 18px);
    bottom: 14px;
    left: 50%;
    translate: -50%;
    background-color: currentColor;
  }

  transition: color 250ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.accentHover};
  }
`;
