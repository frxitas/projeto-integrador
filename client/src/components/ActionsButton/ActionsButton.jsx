import React, { useState } from "react";
import "./ActionsButton.css";

import { Trash, Pencil, Plus } from "@phosphor-icons/react";
import DeleteProductModal from "../DeleteProductModal/DeleteProductModal";

const ActionsButton = ({ onOpen, selectedProduct }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="actions-button">
      <div className="actions-button-content">
        <button
          className="delete-button"
          disabled={!selectedProduct.PROD_ID}
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <Trash size={16} weight="bold" />
        </button>
        <button
          className="edit-button"
          disabled={!selectedProduct.PROD_ID}
          onClick={onOpen}
        >
          <Pencil size={16} weight="bold" />
        </button>
        <button className="add-button" onClick={onOpen}>
          <Plus size={16} weight="bold" />
        </button>
      </div>

      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default ActionsButton;
