import { useContext } from "react";
import { ContextoCarrito } from "../context/ContextoCarrito";
import Swal from "sweetalert2";

export const CarritoPag = () => {
  const {
    listaDeCompras,
    agregarProducto,
    removerProducto,
    incrementarCantidad,
    decrementarCantidad,
  } = useContext(ContextoCarrito);

  const calcularTotal = () => {
    return listaDeCompras
      .reduce(
        (total, producto) => total + producto.price * producto.cantidad,
        0
      )
      .toFixed(2);
  };

  const handlerPurchase = ()=> {

    const productosComprados = listaDeCompras.map(producto => `${producto.title} x ${producto.cantidad}`).join('\n')
    Swal.fire({
      icon: 'success',
      titleText:'Compra realizada correctamente',
      text: productosComprados,
      // html: `<p>Has comprad:</p> <pre>${productosComprados}</pre>`,
      timer: 5000,
    })
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaDeCompras.map((producto) => (
            <tr key={producto.id}>
              <th scope="row">{producto.title}</th>
              <td>${producto.price}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => decrementarCantidad(producto.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{producto.cantidad}</button>
                <button
                  className="btn btn-outline-primary "
                  onClick={() => incrementarCantidad(producto.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removerProducto(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <th>
              <b>TOTAL:</b>
            </th>
            <td></td>
            <td></td>
            <td>${calcularTotal()}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={handlerPurchase}>
          Comprar
        </button>
      </div>
    </>
  );
};
