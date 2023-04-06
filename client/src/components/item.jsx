const Item = (props) => {
  const { item } = props;

  const element = (
    <div className="item">
      <div className="checkBox"></div>
      <div className="info">
        <div className="name">{item.item.name}</div>
        <div className="measure">
          <div className="quantity">{item.quantity}</div>
          <div className="unit">{item.unit}</div>
        </div>
      </div>
    </div>
  );

  return element;
};

export default Item;
