import { useReducer } from "react";
import { ContextoCarrito } from "./ContextoCarrito";

export const ProveedorCarrito = ({ children }) => {


    const estadoInicial = [];

     const compraReducer = (estado = estadoInicial, accion = {}) => {
    switch (accion.type) {
        case "[CARRITO] Agregar Producto":
            return [...estado, accion.payload]

        case "[CARRITO] Remover Producto":
            return estado.filter(producto =>  producto.id !== accion.payload)

        case "[CARRITO] Incrementar Cantidad":
            return estado.map(producto =>  {
              const cant = producto.cantidad + 1
              if (producto.id === accion.payload) return {...producto, cantidad: cant }
              return producto
              }
            )

        case "[CARRITO] Decrementar Cantidad":
            return estado.map(producto =>  {
              const cant = producto.cantidad - 1
              if (producto.id === accion.payload  && producto.cantidad > 1) return {...producto, cantidad: cant }
              return producto
              }
            )
    
        default:
            return estado
    }
  }

  const [listaDeCompras, dispatch] = useReducer(compraReducer, estadoInicial);

  const agregarProducto = (producto) => {

    producto.cantidad = 1
    const accion = {
        type: "[CARRITO] Agregar Producto",
        payload: producto
    }
    dispatch(accion)
  }
  const removerProducto = (id) => {
    const accion = {
        type: "[CARRITO] Remover Producto",
        payload: id
    }
    dispatch(accion)
  }
  const incrementarCantidad = (id) => {
    const accion = {
        type: "[CARRITO] Incrementar Cantidad",
        payload: id
    }
    dispatch(accion)
  }
  const decrementarCantidad = (id) => {
    const accion = {
        type: "[CARRITO] Decrementar Cantidad",
        payload: id
    }
    dispatch(accion)
  }

 

  return (
    <ContextoCarrito.Provider value={{ listaDeCompras, agregarProducto, removerProducto, incrementarCantidad, decrementarCantidad }}>
      {children}
    </ContextoCarrito.Provider>
  );
};
