import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import getItems from "../../dataBase/getItems";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItems
      .then((res) => {
        setProducts(res);
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
      <ItemCount initial={1} stock={5} />
    </div>
  );
};

export default ItemListContainer;
