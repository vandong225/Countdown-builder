import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountdownDetail } from "../pages/CoutdownDetail";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProductsCard } from "../pages/ProductsCard";
import AppProvider from "./AppProvier";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppProvider />}>
          <Route path="/:cId" element={<CountdownDetail/>} />
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
