import { useEffect, useState } from "react";
import { ContextoProducto } from "./ContextoProducto";
import Swal from "sweetalert2";

export const ProveedorProducto = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const respuesta = await fetch("https://fakestoreapi.com/products");
      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Hubo un problema al cargar los productos",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ContextoProducto.Provider value={{ productos }}>
      {children}
    </ContextoProducto.Provider>
  );
};
