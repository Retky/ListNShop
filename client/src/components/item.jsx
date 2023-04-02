const List = (props) => {
  const { item, shops } = props;

  console.log('item', item);
  console.log('shops', shops);

  const itemRow = (
    <li className="row">
      <div className="itemCol">{item.item.name}</div>
      {shops.map((shop) => (
        <div key={`shop-${shop.id}`} className="shopCol">
          {
            (item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id)) ? (
              item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id).price
            ) : ( '' )
          }
        </div>
      ))}
    </li>
  );

  return itemRow;
};

export default List;
