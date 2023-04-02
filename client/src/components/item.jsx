const List = (props) => {
  const { item } = props;

  const itemRow = (
    <li className="row">
      <div className="itemCol">{item.item}</div>
      {item.prices.map((price) => (
        <div className="priceCol">
          {price.price}
        </div>
      ))}
    </li>
  );

  return itemRow;
};

export default List;
