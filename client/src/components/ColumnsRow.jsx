import './items.scss'

const Columns = (props) => {
  const { shops } = props;

  const defaultStore = shops.length ? [] : [{ name: 'Default' }];

  const columns = (
    <li className="row">
      <div className='itemCol titles'>Item</div>
      <div className='shopCol titles'>
        {[...defaultStore, ...shops].map((shop) => (
            <div key={`shop-${shop.id}`} className='price'>{shop.name}</div>
        ))}
      </div>
    </li>
  );

  return columns;
};

export default Columns;
