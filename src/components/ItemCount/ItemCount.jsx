import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ItemCount = ({ stock, initial }) => {
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

  const onAdd = () => {
    mensaje = "El producto se agregó correctamente";
    notify();
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

  return (
    <div className="row">
      <div className="col-auto">
        <div className="card" style={{ with: "10rem" }}>
          <img src="/images/sentey.jpg " className="card-img-top" alt=" " />
          <div className="card-body">
            <h5 className="card-title">SENTEY</h5>
            <p className="card-text">Gabinete con 2 cooler y fuente de 600w</p>
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
              onClick={onAdd}
            >
              Agregar al carrito
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemCount;
