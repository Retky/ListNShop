import './list.scss';

const list = (props) => {
  const { id } = props;

  const list = (
    <ul className="shoppingList">
      <li>Item</li>

      <li>Item 1</li>
      <li>Item 2</li>

      <li>Total:</li>
    </ul>
  )
  return list;
};

export default list;
