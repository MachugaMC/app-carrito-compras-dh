import { useContext, useEffect, useState } from "react";
import "../styles/TarjetaComponent.css";
import { ContextoCarrito } from "../context/ContextoCarrito";

export const TarjetaComponent = ({
  id,
  image,
  title,
  description,
  price,
  handlerAdd,
  handlerRemove,
}) => {
  const { listaDeCompras } = useContext(ContextoCarrito);

  const [agregado, setAgregado] = useState(false);

  const agregarProducto = () => {
    handlerAdd();
    setAgregado(true);
  };
  const sacarProducto = () => {
    handlerRemove();
    setAgregado(false);
  };

  const checkAgregado = () => {
    const boolean = listaDeCompras.some((producto) => producto.id == id);
    setAgregado(boolean);
  };
  useEffect(() => {
    checkAgregado();
  }, []);

  return (
    <>
      <div className="card">
        <img src={image} alt={title} className="card-img" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <p className="card-price">${price}</p>

          {agregado ? (
            <button
              className="btn btn-danger"
              type="button"
              onClick={sacarProducto}
            >
              Quitar del Carrito
            </button>
          ) : (
            <button
              className="btn btn-success"
              type="button"
              onClick={agregarProducto}
            >
              Agregar al Carrito
            </button>
          )}
        </div>
      </div>
    </>
  );
};
