import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap m-3 p-3">
      {products.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemList;
