import React from "react";
import "./Modal.scss";

function Modal({ isOpen, changeModal, children }) {
  return (
    <div className="Modal">
      {isOpen && (
        <div className="modal-container">
          <div className="modal-bg"></div>
          <div className="modal-body">
            <a className="btn-close" onClick={changeModal}>
                <i className="fas fa-times-circle"></i>
            </a>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
