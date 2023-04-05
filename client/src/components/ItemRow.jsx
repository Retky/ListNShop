import './items.scss';

const ItemRow = (props) => {
  const { item, shops } = props;

  const row = (
    <li className="row">
      <div className="itemCol" >{item.item.name}</div>
      <div className={'shopCol'}>
        {shops.map((shop) => {
          let price = item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id)?.price || 0;
          let totalPrice = price * item.quantity;

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
