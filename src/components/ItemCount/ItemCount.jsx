import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ItemCount = ({ stock, initial, onAdd }) => {
  let mensaje;
  const [producto, setProducto] = useState(initial);

  const sumarProducto = () => {
    if (producto < stock) {
      setProducto(producto + 1);
    } else {
      mensaje = "Se supero el límite de productos";
      notify();
    }
  };

  const restarProducto = () => {
    if (producto <= 0) {
      mensaje = "Sin Stock";
      notify();
    } else {
      setProducto(producto - 1);
    }
  };

  const notify = () => {
    toast(mensaje, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const clickAdProd = () => {
    onAdd(producto);
  };

  return (
    <div>
      <h3>Item Counter</h3>
      <button
        type="button"
        className="btn btn-outline-info m-2"
        onClick={restarProducto}
      >
        -
      </button>
      <span>{producto}</span>
      <button
        type="button"
        className="btn btn-outline-info m-2"
        onClick={sumarProducto}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-outline-info m-2"
        onClick={clickAdProd}
      >
        Finalizar compra
      </button>
      <ToastContainer />
    </div>
  );
};
export default ItemCount;
