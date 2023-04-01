import './items.scss'

const Columns = (props) => {
  const { stores } = props;

  const defaultStore = stores.length ? [] : [{ name: 'Default' }];

  const columns = (
    <li className="row">
      <div className='itemCol titles'>Item</div>
      {[...defaultStore, ...stores].map((store) => (
          <div className='storeCol titles'>{store.name}</div>
      ))}
    </li>
  );

  return columns;
};

export default Columns;
