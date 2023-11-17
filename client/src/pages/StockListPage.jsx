import { Pencil, Plus, Trash } from "@phosphor-icons/react";
import { Table, Tbody, Thead, Td, Tr, Th } from "../components/Table";
import DefaultLayout from "../layout/DefaultLayout";
import "./StockListPage.css";

const StockListPage = () => {
  return (
    <DefaultLayout>
      <Table>
        <Thead>
          <Tr>
            <Th isFitContent></Th>
            <Th>Código</Th>
            <Th>Descrição</Th>
            <Th>Categoria</Th>
            <Th>Qtde</Th>
            <Th>Fabricante</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isFitContent>
              <input type="checkbox"/>
            </Td>
            <Td>teste</Td>
            <Td>teste</Td>
            <Td>teste</Td>
            <Td>teste</Td>
            <Td>teste</Td>
          </Tr>
        </Tbody>
      </Table>
      <div className="actions-button">
        <div className="actions-button-content">
          <button className="delete-button">
            <Trash size={16} weight="bold" />
          </button>
          <button className="edit-button">
            <Pencil size={16} weight="bold" />
          </button>
          <button className="add-button">
            <Plus size={16} weight="bold" />
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default StockListPage;
