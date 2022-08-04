import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
  return (
    <div>
      <h1 className="text-success text-center">{props.greeting}</h1>
      <ItemCount initial={1} stock={5} />
    </div>
  );
};

export default ItemListContainer;
