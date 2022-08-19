import { Link } from "react-router-dom";
const Item = ({ prod }) => {
  return (
    <div className="row">
      <div className="col-auto">
        <div className="card">
          <img src={prod.foto} alt="foto producto" />
          <div className="card-body">
            <h5 className="card-title">{prod.nombre}</h5>
            <p className="card-text">${prod.precio}</p>
            <Link to={`/detalle/${prod.id}`}> Detalle del producto</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
