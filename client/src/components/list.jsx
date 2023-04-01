import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalStores } from '../redux/stores';

import Columns from './columns';
import './list.scss';

const List = (props) => {
  const { id } = props;

  const dispatch = useDispatch();
  const stores = useSelector((store) => store.stores);

  useEffect(() => {
    dispatch(fetchLocalStores()); // eslint-disable-next-line
  }, []);

  const list = (
    <ul className="shoppingList">
      <Columns stores={stores} />

      <li>Item 1</li>
      <li>Item 2</li>

      <li>Total:</li>
    </ul>
  )
  return list;
};

export default List;
