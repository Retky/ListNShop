import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalShops } from '../redux/shops';
import { fetchLocalListItems } from '../redux/listItems';

import ColumnsRow from './ColumnsRow';
import ItemRow from './ItemRow';
import './list.scss';

const List = (props) => {
  const { id } = props;
  const [totals, setTotals] = React.useState({});

  const dispatch = useDispatch();
  const shops = useSelector((store) => store.shops);
  const listItems = useSelector((store) => store.listItems);

  useEffect(() => {
    dispatch(fetchLocalShops());
    dispatch(fetchLocalListItems(id));
  }, [dispatch, id]);

  useEffect(() => {
    let totals = {};
    listItems.forEach((item) => {
      item.prices.forEach((price) => {
        if (totals[price.shop_id]) {
          totals[price.shop_id] += price.price * item.quantity;
        } else {
          totals[price.shop_id] = price.price * item.quantity;
        }
      });
    });
    setTotals(totals);
  }, [listItems]);

  const list = (
    <ul className="shoppingList">
      <ColumnsRow shops={shops} />
      {listItems.map((item, index) => (
        <ItemRow key={`item-${item.id}`} item={item} shops={shops} bg={index % 2 === 0 ? 'lightRow' : 'darkRow'} />
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
