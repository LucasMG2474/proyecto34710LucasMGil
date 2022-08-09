import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="d-flex justify-content-between m-3 p-2">
      {products.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemList;
