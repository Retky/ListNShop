import React, { useMemo } from 'react';

const List = React.memo((props) => {
  const { item, shops, bg } = props;
  
  // eslint-disable-next-line
  const pricesSum = useMemo(() => {
    const sums = {};
    shops.forEach((shop) => {
      let priceObj = item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id);
      let price = priceObj !== undefined ? priceObj.price : 0;
      let totalPrice = price * item.quantity;
      sums[shop.id] = sums[shop.id] ? sums[shop.id] + totalPrice : totalPrice;
    });
    return sums;
  }, [item, shops]);

  const itemRow = (
    <li className="row">
      {/* TODO: Put this in a component */}
      <div className="itemCol">{item.item.name}</div>
      <div className={`shopCol ${bg}`}>
        {shops.map((shop) => {
          let price = item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id)?.price || 0;
          let totalPrice = price * item.quantity;
          return (
            <div key={`shop-${shop.id}`} className="prices">
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

  return itemRow;
});

export default List;
