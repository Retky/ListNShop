import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalShops } from '../redux/shops';
import { fetchLocalListItems } from '../redux/listItems';

import ColumnsRow from './columnsRow';
import ItemRow from './itemRow';
import TotalRow from './totalRow';
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
        <ItemRow key={`item-${item.id}`} item={item} shops={shops} />
      ))}
      <TotalRow shops={shops} totals={totals} />
    </ul>
  );

  return list;
};

export default List;
