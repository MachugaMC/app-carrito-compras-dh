import { useContext } from "react";
import { TarjetaComponent } from "../Components/TarjetaComponent";
import { ContextoProducto } from "../context/ContextoProducto";
import { ContextoCarrito } from "../context/ContextoCarrito";

export const ProductosPag = () => {
  const { productos } = useContext(ContextoProducto);
  const { agregarProducto, removerProducto } = useContext(ContextoCarrito);

  return (
    <>
      <h1>Productos</h1>
      <hr />
      {productos.map((producto) => (
        <TarjetaComponent
          key={producto.id}
          id={producto.id}
          image={producto.image}
          title={producto.title}
          description={producto.description}
          price={producto.price}
          handlerAdd={() => agregarProducto(producto)}
          handlerRemove={() => removerProducto(producto.id)}
        />
      ))}
    </>
  );
};
