import React from "react";
import cl from "./Modal.module.css";

const Modal = ({ children, onCloseModal }) => {
  return (
    <>
      <div className={cl.backdrop} onClick={onCloseModal} />
      <div className={cl.content}>{children}</div>
    </>
  );
};

export default Modal;
