const Item = ({ prod }) => {
  const detalle = () => {
    alert("información del producto detallada");
  };
  return (
    <div className="row">
      <div className="col-auto">
        <div className="card">
          <img src={prod.foto} alt="foto producto" />
          <div className="card-body">
            <h5 className="card-title">{prod.nombre}</h5>
            <p className="card-text">${prod.precio}</p>
            <button
              type="button"
              className="btn btn-outline-info m-2"
              onClick={detalle}
            >
              Detalle del producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
