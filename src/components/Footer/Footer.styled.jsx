import styled from '@emotion/styled';

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecond};
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  gap: 50px;
`;
