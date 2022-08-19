import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItems from "../../dataBase/getItems";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState([]);
  const { id } = useParams();

  function arrayProductos() {
    return new Promise((resolve, reject) => {
      const condicion = true;
      if (condicion) {
        setTimeout(() => {
          let productoBuscado = getItems.find(
            (elemento) => elemento.id === Number(id)
          );
          resolve(productoBuscado);
        }, 2000);
      } else {
        setTimeout(() => {
          reject("404 not Found");
        }, 2000);
      }
    });
  }

  useEffect(() => {
    arrayProductos()
      .then((res) => {
        setDetalle(res);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <ItemDetail prodDetail={detalle} />
    </div>
  );
};

export default ItemDetailContainer;
