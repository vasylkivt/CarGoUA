import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const InputLabel = styled.p`
  color: ${({ theme }) => theme.colors.textGrey_70};
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 48px;
  padding: 14px 41px 14px 24px;
  border: transparent;

  border-radius: ${({ inputType }) =>
    inputType === 'from' ? '14px 0px 0px 14px' : '0 14px 14px 0'};
  border-right: ${({ inputType }) =>
    inputType === 'from' ? '1px solid rgba(138, 138, 137, 0.2)' : ''};
  background: #f7f7fb;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  transition:
    color 150ms ease-in-out,
    border 150ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.accentHover};
    border: 1px solid ${({ theme }) => theme.colors.accentHover};
  }

  & input {
    padding-left: 10px;
    border: none;
    outline: none;
    background-color: transparent;
  }

  label {
  }
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
