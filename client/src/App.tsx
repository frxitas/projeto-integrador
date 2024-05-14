import { Route, Routes } from "react-router-dom";
import StockListPage from "./features/stock/pages/StockListPage";
import TicketLitsPage from "./features/tickets/pages/TicketLitsPage";
import ProductDetailPage from "./features/stock/pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/estoque" element={<StockListPage />} />
      <Route path="/estoque/detail/:id?" element={<ProductDetailPage />} />
      <Route path="/chamados" element={<TicketLitsPage />} />
    </Routes>
  );
}

export default App;
