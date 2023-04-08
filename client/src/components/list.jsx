import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalShops } from '../redux/shops';
import { fetchLocalListItems } from '../redux/listItems';

import ColumnsRow from './columnsRow';
import ItemRow from './itemRow';
import TotalRow from './totalRow';
import './list.scss';

const List = (props) => {
  const { id } = props;

  const dispatch = useDispatch();
  const shops = useSelector((store) => store.shops);
  const listItems = useSelector((store) => store.listItems);

  const [totals, setTotals] = useState({})

  let finalTotals = {};

  useEffect(() => {
    dispatch(fetchLocalShops());
    dispatch(fetchLocalListItems(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log('totals', totals);
    shops.forEach((shop) => {
      // get all the totals with the same shop id
      let shopTotals = Object.values(totals).map((item) => item[shop.id]);
      console.log('shopTotals', shopTotals);
      // sum all the totals
      let sum = shopTotals.reduce((a, b) => a + b, 0);
      console.log('sum', sum);
      // add the sum to the final totals
      finalTotals[shop.id] = sum;
    });
    console.log('finalTotals', finalTotals);
  }, [totals]);

  const list = (
    <ul className="shoppingList">
      <ColumnsRow shops={shops} />
      {listItems.map((item) => (
        <ItemRow key={`item-${item.id}`} item={item} shops={shops} totals={totals} setTotals={setTotals} />
      ))}
      <TotalRow shops={shops} totals={finalTotals} />
    </ul>
  );

  return list;
};

export default List;
