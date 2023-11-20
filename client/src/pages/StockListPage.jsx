import { useEffect, useState } from "react";
import axios from "axios";

import { Table, Tbody, Thead, Td, Tr, Th } from "../ds/Table";

import ProductModal from "../components/ProductModal/ProductModal";
import ActionsButton from "../components/ActionsButton/ActionsButton";

import DefaultLayout from "../layout/DefaultLayout";

const StockListPage = () => {
  const [products, setProducts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [umeds, setUmeds] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    PROD_DESC: "",
    PROD_FABRICANTE_ID: 0,
    PROD_GRUPO_ID: 0,
    PROD_ID: 0,
    PROD_NOME: "",
    PROD_UMED_ID: 0,
    PROD_VALOR: 0,
  });

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3000/product/list");
    console.log(response);
    
    if (response.status === 200) setProducts(response.data);
  };

  const fetchGroups = async () => {
    const response = await axios.get("http://localhost:3000/groups");

    if (response.status === 200) setGroups(response.data);
  };

  const fetchManufacturers = async () => {
    const response = await axios.get("http://localhost:3000/manufacturers");

    if (response.status === 200) setManufacturers(response.data);
  };

  const fetchUmeds = async () => {
    const response = await axios.get("http://localhost:3000/unities");

    if (response.status === 200) setUmeds(response.data);
  };

  useEffect(() => {
    Promise.all([
      fetchProducts(),
      fetchGroups(),
      fetchManufacturers(),
      fetchUmeds(),
    ]);
  }, []);

  const handleSelectedProduct = (e, index, product) => {
    if (e.target.checked) setSelectedProduct({ ...product, index });
    else setSelectedProduct({});
  };
  return (
    <DefaultLayout>
      {!products.length ? (
        <div>Carregando</div>
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Th isFitContent></Th>
              <Th>Nome</Th>
              {/* <Th>Descrição</Th> */}
              <Th>Preço</Th>
              <Th>Grupo</Th>
              <Th>Fabricante</Th>
            </Tr>
          </Thead>
          <Tbody>
            {manufacturers.length &&
              groups.length &&
              products?.map((product, index) => {
                let manufacturer = manufacturers?.filter(
                  (item) => item.FABRICANTE_ID === product.PROD_FABRICANTE_ID
                )[0];
                let group = groups?.filter(
                  (item) => item.GRUPO_ID === product.PROD_GRUPO_ID
                )[0];
                return (
                  <Tr key={product.PROD_ID}>
                    <Td isFitContent>
                      <input
                        type="checkbox"
                        style={{
                          height: 16,
                          width: 16,
                          cursor: "pointer"
                        }}
                        checked={product.PROD_ID === selectedProduct.PROD_ID}
                        onChange={(e) =>
                          handleSelectedProduct(e, index, product)
                        }
                        disabled={selectedProduct.PROD_ID && selectedProduct.PROD_ID !== product.PROD_ID}
                      />
                    </Td>
                    <Td>{product.PROD_NOME}</Td>
                    {/* <Td>{product.PROD_DESC}</Td> */}
                    <Td>
                      {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product.PROD_VALOR)}
                    </Td>
                    <Td>{group.GRUPO_NOME}</Td>
                    <Td>{manufacturer.FABRICANTE_NOME}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      )}

      <ActionsButton
        selectedProduct={selectedProduct}
        onOpen={() => setModalIsOpen(true)}
      />

      <ProductModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        umeds={umeds}
        groups={groups}
        manufacturers={manufacturers}
        fetchProducts={fetchProducts}
      />
    </DefaultLayout>
  );
};

export default StockListPage;
