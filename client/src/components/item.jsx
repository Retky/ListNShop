import './items.scss';

const itemRow = (props) => {
  const { item, shops, bg, setTotal } = props;

  const row = (
    <li className="row">
      {/* TODO: Put this in a component */}
      <div className="itemCol">{item.item.name}</div>
      <div className={`shopCol ${bg}`}>
        {shops.map((shop) => {
          let price = item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id)?.price || 0;
          let totalPrice = price * item.quantity;
          
          if (totalPrice) {
            console.log('calling setTotal');
            setTotal(shop.id, totalPrice);
          }

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
  
  console.log(`Rendering Item ${item.item.name}`);

  return row;
};

export default itemRow;
