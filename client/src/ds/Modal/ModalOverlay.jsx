import React from "react";
import "./Modal.css";

const ModalOverlay = ({ onClose }) => {
  return <div className="modal-overlay" onClick={() => onClose(false)} />;
};

export default ModalOverlay;
