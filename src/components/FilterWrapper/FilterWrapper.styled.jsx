import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
`;
export const InputWrapper = styled.div``;
export const InputLabel = styled.p`
  color: ${({ theme }) => theme.colors.textGrey_70};
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 8px;
`;

export const DropdownBtn = styled.button`
  width: ${({ inputWidth }) => inputWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border-radius: 14px;

  border: 1px solid transparent;

  background-color: ${({ theme }) => theme.colors.backgroundSecond};

  transition:
    color 150ms ease-in-out,
    border 150ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.accentHover};
    border: 1px solid ${({ theme }) => theme.colors.accentHover};
  }
  :hover svg {
    stroke: ${({ theme }) => theme.colors.accentHover};
  }
  svg {
    transition:
      stroke 150ms ease-in-out,
      rotate 150ms ease-in-out;
    rotate: ${({ isOpen }) => (isOpen ? '180deg' : '0deg')};
    width: 20px;
    height: 20px;
  }
`;

export const DropdownList = styled.ul`
  cursor: pointer;
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  height: 272px;
  overflow: auto;
  z-index: 8;
  width: 100%;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  &.dropdown-menu-enter {
    opacity: 0;
    translate: 0 -50%;
  }

  &.dropdown-menu-enter-active {
    opacity: 1;
    translate: 0 0;
    transition:
      opacity 150ms ease-in-out 150ms,
      translate 300ms ease-in-out;
  }

  &.dropdown-menu-exit {
    opacity: 1;
    translate: 0 0;
  }

  &.dropdown-menu-exit-active {
    opacity: 0;
    translate: 0 -50%;
    transition:
      opacity 150ms ease-in-out,
      translate 300ms ease-in-out;
  }
`;

export const DropdownItem = styled.li`
  color: rgba(18, 20, 23, 0.2);

  font-size: 16px;

  font-weight: 500;
  line-height: 1.25; /* 125% */
  transition: color 150ms ease-in-out;
  :hover {
    color: ${({ theme }) => theme.colors.accentHover};
  }
`;
