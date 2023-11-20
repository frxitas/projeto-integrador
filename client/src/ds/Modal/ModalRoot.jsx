import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const ModalRoot = ({ children, isOpen }) => {
  return createPortal(
    <div className={`modal-root ${isOpen ? "modal-root-open" : ""}`}>{children}</div>,
    document.body
  );
};

export default ModalRoot;
