import { Route, Routes } from "react-router-dom";
import StockListPage from "./features/stock/pages/StockListPage";
import TicketListPage from "./features/tickets/pages/TicketListPage";
import ProductDetailPage from "./features/stock/pages/ProductDetailPage";
import TicketDetailPage from "./features/tickets/pages/TicketDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/estoque" element={<StockListPage />} />
      <Route path="/estoque/detalhe/:id?" element={<ProductDetailPage />} />
      <Route path="/chamados" element={<TicketListPage />} />
      <Route path="/chamados/detalhe/:id?" element={<TicketDetailPage />} />
    </Routes>
  );
}

export default App;
