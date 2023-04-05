import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalShops } from '../redux/shops';
import { fetchLocalListItems } from '../redux/listItems';

import Columns from './columns';
import Item from './item';
import './list.scss';

const List = (props) => {
  const { id } = props;
  const totals = {};

  const dispatch = useDispatch();
  const shops = useSelector((store) => store.shops);
  const listItems = useSelector((store) => store.listItems);

  useEffect(() => {
    dispatch(fetchLocalShops());
    dispatch(fetchLocalListItems(id));
  }, [dispatch, id]);

  const sumTotal = (shopId, total) => {
    if (totals[shopId]) {
      // console.log('sumTotal', shopId, total);
      totals[shopId] += total;
    } else {
      // console.log('createTotal', shopId, total);
      totals[shopId] = total;
    }
    console.log('totals', totals);
  };

  const list = (
    <ul className="shoppingList">
      <Columns shops={shops} />
      {listItems.map((item, index) => (
        <Item key={`item-${item.id}`} item={item} shops={shops} bg={index % 2 === 0 ? 'lightRow' : 'darkRow'} setTotal={sumTotal} />
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
