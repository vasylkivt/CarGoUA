import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
`;

export const DropdownBtn = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  backdrop-filter: blur(1px);
  padding: 7px 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 10px;

  background-color: transparent;
  color: #898686;
  transition:
    border-radius 300ms ease-in-out,
    color 150ms ease-in-out,
    border 150ms ease-in-out;
  :hover {
    border: 1px solid #e6533c;
    color: ${({ theme }) => theme.colors.white};
  }
  :hover svg {
    stroke: ${({ theme }) => theme.colors.white};
  }
  svg {
    transition:
      stroke 150ms ease-in-out,
      rotate 150ms ease-in-out;
    rotate: ${({ isOpen }) => (isOpen ? '180deg' : '0deg')};
    stroke: #898686;
    width: 20px;
    height: 20px;
  }
`;

export const DropdownList = styled.ul`
  backdrop-filter: blur(1px);
  cursor: pointer;
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 9px 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

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
  color: #898686;
  transition: color 150ms ease-in-out;
  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
