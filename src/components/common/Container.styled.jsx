import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
    padding-right: 24px;
    padding-left: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1328px;
    padding-right: 128px;
    padding-left: 128px;
  }
`;
