import React, { useState } from "react";
import "./DeleteProductModal.css";
import axios from "axios";

import { Modal } from "../../ds/Modal";

const DeleteProductModal = ({ isOpen, onClose, selectedProduct }) => {
  const [successfullyDeleted, setSuccessfullyDeleted] = useState(false);

  const handleDeleteProduct = async () => {
    const response = await axios.delete(
      `http://localhost:3000/product/${selectedProduct.PROD_ID}`
    );

    if (response.status === 200) setSuccessfullyDeleted(true);
  };

  const handleCloseModal = () => {
    setSuccessfullyDeleted(false);
    onClose();
    setTimeout(() => {
      fetchProducts();
    }, 300);
  };

  return (
    <Modal.Root isOpen={isOpen}>
      <Modal.Overlay onClose={onClose} />
      <Modal.Content>
        {!successfullyDeleted ? (
          <>
            <Modal.Header>Deletar Produto</Modal.Header>
            <Modal.Body>
              Tem certeza que deseja deletar esse produto?
            </Modal.Body>
            <Modal.Footer>
              <div className="delete-product-actions">
                <button
                  className="delete-product-actions-cancel"
                  onClick={onClose}
                >
                  cancelar
                </button>
                <button
                  className="delete-product-actions-delete"
                  onClick={handleDeleteProduct}
                >
                  deletar
                </button>
              </div>
            </Modal.Footer>
          </>
        ) : (
          <Modal.Body>
            <div className="delete-product-success-feedback">
              <span>Produto deletado com sucesso!</span>
              <button
                className="delete-product-success-feedback-button"
                onClick={handleCloseModal}
              >
                Ok
              </button>
            </div>
          </Modal.Body>
        )}
      </Modal.Content>
    </Modal.Root>
  );
};

export default DeleteProductModal;
