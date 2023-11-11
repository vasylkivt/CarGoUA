import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  row-gap: 30px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    row-gap: 40px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 50px;
    column-gap: 30px;
  }
`;

export const Item = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 60px) / 3);
  }
`;
