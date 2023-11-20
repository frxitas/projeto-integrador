import React, { useState, useEffect } from "react";

import axios from "axios";

import { Modal } from "../../ds/Modal";
import Input from "../../ds/Input/Input";
import Select from "../../ds/Select/Select";

import "./ProductModal.css";

const ProductModal = ({
  isOpen,
  onClose,
  selectedProduct,
  setSelectedProduct,
  groups,
  umeds,
  manufacturers,
  fetchProducts,
}) => {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    umedId: 1,
    groupId: 1,
    manufacturerId: 1,
  });
  console.log(productForm);

  const [successfullySaved, setSuccessfullySaved] = useState({
    status: "idle",
    action: "idle",
  });

  const getProductById = async () => {
    const response = await axios.get(
      `http://localhost:3000/product/${selectedProduct.PROD_ID}`
    );

    if (response.status === 200) {
      setProductForm({
        id: response.data.PROD_ID,
        name: response.data.PROD_NOME,
        description: response.data.PROD_DESC,
        price: response.data.PROD_VALOR,
        umedId: response.data.PROD_UMED_ID,
        groupId: response.data.PROD_GRUPO_ID,
        manufacturerId: response.data.PROD_FABRICANTE_ID,
      });
    }
  };

  const createProduct = async () => {
    let data = {
      name: productForm.name,
      description: productForm.description,
      price: productForm.price,
      um_id: productForm.umedId,
      group_id: productForm.groupId,
      manufacturer_id: productForm.manufacturerId,
    };

    const response = await axios.post("http://localhost:3000/product", data);

    if (response.status === 200) {
      setSuccessfullySaved({ status: "ok", action: "creation" });
      alert("criado com sucesso");
    }
  };

  const updateProduct = async () => {
    let data = {
      name: productForm.name,
      description: productForm.description,
      price: productForm.price,
      um_id: productForm.umedId,
      group_id: productForm.groupId,
      manufacturer_id: productForm.manufacturerId,
    };

    const response = await axios.put(
      `http://localhost:3000/product/${selectedProduct.PROD_ID}`,
      data
    );

    if (response.status === 200) {
      setSuccessfullySaved({ status: "ok", action: "edition" });
    }
  };

  useEffect(() => {
    if (isOpen && selectedProduct.PROD_ID) getProductById();
    else if (!isOpen)
      setProductForm({
        name: "",
        description: "",
        price: "",
        umedId: 0,
        groupId: 0,
        manufacturerId: 0,
      });
  }, [isOpen, selectedProduct]);

  const umedsOptions = umeds?.map((umed) => {
    return { label: umed.UMED_NOME, value: umed.UMED_ID };
  });

  const groupsOptions = groups?.map((group) => {
    return { label: group.GRUPO_NOME, value: group.GRUPO_ID };
  });

  const manufacturersOptions = manufacturers?.map((manufacturer) => {
    return {
      label: manufacturer.FABRICANTE_NOME,
      value: manufacturer.FABRICANTE_ID,
    };
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (selectedProduct.PROD_ID) updateProduct();
    else createProduct();
  };

  const saveProductFeedback = (action) => {
    return {
      creation: "Produto cadastrado com sucesso!",
      edition: "Produto atualizado com sucesso!",
    }[action];
  };

  const handleCloseModal = () => {
    setSuccessfullySaved({ status: "idle", action: "idle" });
    onClose();
    setTimeout(() => {
      setSelectedProduct({
        PROD_DESC: "",
        PROD_FABRICANTE_ID: 0,
        PROD_GRUPO_ID: 0,
        PROD_ID: 0,
        PROD_NOME: "",
        PROD_UMED_ID: 0,
        PROD_VALOR: 0,
      });
      fetchProducts();
    }, 300);
  };

  return (
    <Modal.Root isOpen={isOpen}>
      <Modal.Overlay onClose={onClose} />
      {isOpen && (
        <Modal.Content>
          {successfullySaved.status === "idle" ? (
            <>
              <Modal.Header>Cadastrar Produto</Modal.Header>
              <Modal.Body>
                <form onSubmit={handleOnSubmit} className="product-modal-form">
                  <div className="product-modal-fields">
                    <Input
                      name="name"
                      label={"Nome"}
                      value={productForm.name}
                      onChange={(e) =>
                        setProductForm({ ...productForm, name: e.target.value })
                      }
                    />
                    <Input
                      name="description"
                      label={"Descrição"}
                      value={productForm.description}
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          description: e.target.value,
                        })
                      }
                    />
                    <Input
                      name="price"
                      type="number"
                      label={"Preço"}
                      value={productForm.price}
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="product-modal-fields">
                    <Select
                      label={"Umed"}
                      options={umedsOptions}
                      defaultValue={productForm.umedId}
                      onChange={(e) =>
                        setProductForm({ ...productForm, umedId: e.value })
                      }
                    />
                    <Select
                      label={"Fabricante"}
                      options={manufacturersOptions}
                      defaultValue={productForm.manufacturerId}
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          manufacturerId: e.value,
                        })
                      }
                    />
                    <Select
                      label={"Grupo"}
                      options={groupsOptions}
                      defaultValue={productForm.groupId}
                      onChange={(e) =>
                        setProductForm({ ...productForm, groupId: e.value })
                      }
                    />
                  </div>
                  <div className="product-modal-buttons">
                    <button
                      type="button"
                      className="product-modal-cancel-button"
                      onClick={onClose}
                    >
                      cancelar
                    </button>
                    <button type="submit" className="product-modal-save-button">
                      salvar
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </>
          ) : (
            <Modal.Body>
              <div className="product-success-feedback">
                {saveProductFeedback(successfullySaved.action)}
                <button
                  className="product-success-feedback-button"
                  onClick={handleCloseModal}
                >
                  Ok
                </button>
              </div>
            </Modal.Body>
          )}
        </Modal.Content>
      )}
    </Modal.Root>
  );
};

export default ProductModal;
