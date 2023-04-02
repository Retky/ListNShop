import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalSHOPS } from '../redux/shops';
import { fetchLocalListItems } from '../redux/listItems';

import Columns from './columns';
import Item from './item';
import './list.scss';

const List = (props) => {
  const { id } = props;

  const dispatch = useDispatch();
  const shops = useSelector((store) => store.shops);
  const listItems = useSelector((store) => store.listItems);

  useEffect(() => {
    dispatch(fetchLocalSHOPS());
    dispatch(fetchLocalListItems(id)); // eslint-disable-next-line
  }, [id]);

  const list = (
    <ul className="shoppingList">
      <Columns key={`titles`} shops={shops} />
      {listItems.map((item) => (
        <Item key={`item-${item.id}`} item={item} shops={shops} />
      ))}

      <li>Total:</li>
    </ul>
  )
  return list;
};

export default List;
