import React from "react";

const Modal = ({ show, children}) => {
  if (!show) return null;
  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered" >
        <div className="modal-content">
          {children}
        </div>
      </div>
      
    </div>
  );
};

export default Modal;