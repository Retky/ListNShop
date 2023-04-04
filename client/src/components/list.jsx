import { useEffect, useMemo } from 'react';
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
    dispatch(fetchLocalListItems(id));
  }, [dispatch, id]);

  const totals = useMemo(() => {
    const sums = {};
    listItems.forEach((item) => {
      shops.forEach((shop) => {
        const priceObj = item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id);
        const price = priceObj ? priceObj.price : 0;
        const totalPrice = price * item.quantity;
        sums[shop.id] = (sums[shop.id] || 0) + totalPrice;
      });
    });
    return sums;
  }, [listItems, shops]);

  const list = (
    <ul className="shoppingList">
      <Columns shops={shops} />
      {listItems.map((item, index) => (
        <Item key={`item-${item.id}`} item={item} shops={shops} bg={index % 2 === 0 ? 'lightRow' : 'darkRow'} />
      ))}
      {/* TODO: Put this in a component */}
      <li className='row'>Total: {shops.map((shop) => (
        <div key={`shop-${shop.id}`} className="prices">
          <div>
            {totals[shop.id] ? `$${totals[shop.id]}` : '-'}
          </div>
        </div>
      ))}</li>
    </ul>
  );
  return list;
};

export default List;
