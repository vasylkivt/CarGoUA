import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
  img {
    height: 202px;
    width: 100%;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      height: 232px;
    }

    @media screen and (min-width: 1440px) {
      height: 268px;
    }
  }

  svg {
    position: absolute;
    top: 14px;
    right: 14px;
    color: ${({ theme }) => theme.colors.accent};
    fill: ${({ theme }) => theme.colors.accent};
  }
`;

export const Title = styled.h2`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.textGrey_100};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  .model {
    color: ${({ theme }) => theme.colors.accent};

    ::after {
      content: ',';
      color: ${({ theme }) => theme.colors.textGrey_100};
    }
  }

  & :last-of-type {
    margin-left: auto;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;

  & span {
    position: relative;
    color: ${({ theme }) => theme.colors.textGrey_50};
    font-family: Manrope;
    font-size: 12px;
    line-height: 1.5;

    :not(:last-of-type)::after {
      position: absolute;
      background-color: ${({ theme }) => theme.colors.textGrey_10};
      width: 1px;
      right: -6.5px;
      top: 0;
      height: 100%;
      content: '';
    }
  }
`;

export const Button = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 12px;
  width: 100%;

  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
