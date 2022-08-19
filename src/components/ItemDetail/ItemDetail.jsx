import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ prodDetail }) => {
  const [counter, setCounter] = useState(0);

  function handleAdd(count) {
    setCounter(count);
  }
  return (
    <div className="row">
      <div className="col-auto">
        <div className="card">
          <img src={prodDetail.foto} alt="foto producto" />
          <div className="card-body">
            <h5 className="card-title">{prodDetail.nombre}</h5>
            <p className="card-text">{prodDetail.descrip}</p>
            <p className="card-text">${prodDetail.precio}</p>
            {counter === 0 ? (
              <ItemCount initial={1} stock={5} onAdd={handleAdd} />
            ) : (
              <Link to="/cart"> Ir al carrito </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
