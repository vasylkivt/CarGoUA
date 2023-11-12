import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    );
  }

  img {
    background: ${({ theme }) => theme.colors.backgroundImage};
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
`;

export const ButtonHeart = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  background-color: transparent;
  top: 14px;
  right: 14px;

  transition: color 250ms ease-in-out;

  :hover svg {
    color: ${({ theme }) => theme.colors.accent};
    scale: 1.2;
  }

  svg {
    transition:
      scale 250ms ease-in-out,
      color 250ms ease-in-out,
      fill 250ms ease-in-out;

    color: ${({ isOnFavoriteList, theme }) =>
      isOnFavoriteList ? theme.colors.accent : theme.colors.textWhite};

    fill: ${({ isOnFavoriteList, theme }) =>
      isOnFavoriteList ? theme.colors.accent : 'transparent'};
  }
`;

export const Title = styled.h2`
  display: flex;
  gap: 3px;
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
  column-gap: 12px;
  margin-bottom: 28px;

  & span {
    position: relative;
    color: ${({ theme }) => theme.colors.textGrey_50};
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
  margin-top: auto;
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
