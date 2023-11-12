import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-height: 90vh;
  overflow: auto;
  width: 90vw;
  border-radius: 24px;
  padding: 40px 20px;
  background: ${({ theme }) => theme.colors.backgroundMain};

  @media screen and (min-width: 480px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) {
    width: 541px;
    padding: 40px;
  }
`;

export const Img = styled.img`
  position: relative;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.backgroundImage};
  height: 150px;
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: 480px) {
    height: 202px;
  }
  @media screen and (min-width: 768px) {
    height: 232px;
  }

  @media screen and (min-width: 1440px) {
    height: 268px;
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

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  margin-bottom: 14px;

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

export const Description = styled.p`
  margin-bottom: 24px;
  line-height: 1.43;
`;

export const FeaturesTitle = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const FeaturesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  margin-bottom: 14px;

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

export const ConditionsTitle = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ConditionsTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;

  p {
    padding: 7px 14px;
    display: inline-block;
    border-radius: 35px;
    background-color: ${({ theme }) => theme.colors.backgroundSecond};
  }
  .accent-number {
    display: inline-block;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Button = styled.a`
  padding: 12px 50px;

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
