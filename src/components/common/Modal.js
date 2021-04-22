import React from "react";
import "./Modal.scss";

function Modal({ keyword, isOpen, changeModal }) {
  return (
    <div className="Modal">
      {isOpen && (
        <div className="modal-container">
          <div className="modal-bg"></div>
          <div className="modal-body">
            <a className="btn-close" onClick={changeModal}>
                <i className="fas fa-times-circle"></i>
            </a>
            {keyword}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
