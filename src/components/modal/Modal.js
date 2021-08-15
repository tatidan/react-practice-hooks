import React, {useEffect} from 'react';
import Overlay from './ModalStyled';

const Modal = ({ children, formToggler }) => {
  
  useEffect(() => {
    window.addEventListener('keydown', onHandleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
    return () => {
      window.removeEventListener('keydown', onHandleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const onHandleEsc = (e) => {
    if (e.code === "Escape") formToggler();
  };

  const onBackdropClick = (e) => {
    e.currentTarget === e.target && formToggler();
  };

  return (
    <>
      <Overlay onClick={onBackdropClick}>
        <div className="modal">{children}</div>
      </Overlay>      
    </>
  )
};

export default Modal;