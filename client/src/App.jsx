import { useState } from "react";

import DefaultLayout from "./layout/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import StockListPage from "./pages/StockListPage";

function App() {
  return (
    <Routes basename="/">
      <Route path="/estoque" element={<StockListPage />} />
    </Routes>
  );
}

export default App;
