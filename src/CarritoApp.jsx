import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./Components/NavbarComponent";
import { ProductosPag } from "./pages/ProductosPag";
import { CarritoPag } from "./pages/CarritoPag";
import { ProveedorProducto } from "./context/ProveedorProducto";
import { ProveedorCarrito } from "./context/ProveedorCarrito";

export const CarritoApp = () => {
  return (
    <ProveedorProducto>
      <ProveedorCarrito>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductosPag />}></Route>
          <Route path="/carrito" element={<CarritoPag />}></Route>
          <Route path="/*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </div>
      </ProveedorCarrito>
    </ProveedorProducto>
  );
};
