import { useState, useEffect } from 'react';

import Item from './item.jsx';

import './rows.scss';

const ItemRow = (props) => {
  const { item, shops, totals, setTotals } = props;

  const [value, setValue] = useState(item.quantity);

  useEffect(() => {
    const obj = {};
    const newTotals = {};
    shops.forEach((shop) => {
      let currentPrice = item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id)?.price || 0;
      newTotals[shop.id] = currentPrice * value;
    });
    obj[item.item.id] = newTotals;

    setTotals({ ...totals, ...obj });
  }, [value, item.prices, setTotals]);

  const row = (
    <li className="row">
      <div className="itemCol" >
        <Item item={item} value={value} setValue={setValue} />
      </div>
      <div className={'shopCol'}>
        {shops.map((shop) => {
          let price = item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id)?.price || 0;
          let totalPrice = price * value;

          return (
            <div key={`shop-${shop.id}`} className="price">
              <div>
                {price ? `$${price}` : '-'}
              </div>
              <div className="totalPrice">
                {totalPrice ? `$${totalPrice}` : '-'}
              </div>
            </div>
          )
        })}
      </div>
    </li>
  );

  return row;
};

export default ItemRow;
