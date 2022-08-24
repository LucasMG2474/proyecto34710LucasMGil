import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItems from "../../dataBase/getItems";
import ItemList from "../ItemList/ItemList";

function arrayProductos() {
  return new Promise((resolve, reject) => {
    const condicion = true;
    if (condicion) {
      setTimeout(() => {
        resolve(getItems);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("404 not Found");
      }, 2000);
    }
  });
}
const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    arrayProductos()
      .then((res) => {
        if (idCategoria === undefined) {
          setProducts(res);
        } else {
          let prodFiltrado = res.filter((el) => el.categoria === idCategoria);
          setProducts(prodFiltrado);
        }
      })
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-success text-center">{props.greeting}</h1>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
