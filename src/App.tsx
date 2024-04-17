import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./features/home/Landing";
import ProductList from "./products/ProductList";
import Login from "./features/login/login";

function App() {
  return (
    //<Template>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:slug" element={<ProductDetail />}></Route>
        <Route path="/home" element={<Landing />}></Route>
      </Routes>
    //</Template>
  );
}

export default App;
