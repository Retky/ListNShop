const List = (props) => {
  const { item } = props;

  const itemRow = (
    <li className="row">
      <div className="itemCol">{item.item.name}</div>
    </li>
  );

  return itemRow;
};

export default List;
