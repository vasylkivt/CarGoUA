import styled from '@emotion/styled';

export const Backdrop = styled.div`
  background: ${({ theme }) => theme.colors.backdrop};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;

  &.backdrop-wrapper-enter {
    opacity: 0;
  }

  &.backdrop-wrapper-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  &.backdrop-wrapper-exit {
    opacity: 1;
  }

  &.backdrop-wrapper-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out 200ms;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  border-radius: 12px;

  &.modal-wrapper-enter {
    opacity: 0;
    scale: 0.5;
  }

  &.modal-wrapper-enter-active {
    opacity: 1;
    scale: 1;
    transition:
      opacity 200ms ease-in-out 200ms,
      scale 200ms ease-in-out 200ms;
  }

  &.modal-wrapper-exit {
    opacity: 1;
    scale: 1;
  }

  &.modal-wrapper-exit-active {
    opacity: 0;
    scale: 0.5;

    transition:
      opacity 200ms ease-in-out,
      scale 200ms ease-in-out;
  }

  svg {
    cursor: pointer;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 14px;
    right: 14px;
    color: ${({ theme }) => theme.colors.textGrey_100};

    :hover {
      color: ${({ theme }) => theme.colors.accent};
    }

    @media screen and (min-width: 768px) {
      top: 16px;
      right: 16px;
      width: 26px;
      height: 26px;
    }
  }
`;
