import CloseIcon from 'assets/icons/close.svg?react';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Backdrop, Modal } from './ModalWindow.styled';

export default function BasicModalWindow({ onShow, onClose, children }) {
  const modalRoot = document.querySelector('#modal-root');

  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!onShow) return;

    const bodyScroll = disable => {
      document.body.style.overflow = disable ? 'hidden' : 'auto';
    };

    if (onShow || modalRoot.children.length !== 0) {
      bodyScroll(true);
    }

    const onEscKeyPress = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscKeyPress);

    return () => {
      bodyScroll(false);
      window.removeEventListener('keydown', onEscKeyPress);
    };
  }, [modalRoot.children.length, onShow, onClose]);

  return createPortal(
    <>
      <CSSTransition
        in={onShow}
        nodeRef={backdropRef}
        timeout={400}
        classNames="backdrop-wrapper"
        unmountOnExit
      >
        <Backdrop onClick={onClose} ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={onShow}
        nodeRef={modalRef}
        timeout={400}
        classNames="modal-wrapper"
        unmountOnExit
      >
        <Modal ref={modalRef}>
          <CloseIcon onClick={onClose} />
          {children}
        </Modal>
      </CSSTransition>
    </>,
    modalRoot,
  );
}

BasicModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onShow: PropTypes.bool.isRequired,
};
