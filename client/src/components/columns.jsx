import './items.scss'

const Columns = (props) => {
  const { shops } = props;

  const defaultStore = shops.length ? [] : [{ name: 'Default' }];

  const columns = (
    <li className="row">
      <div className='itemCol titles'>Item</div>
      {[...defaultStore, ...shops].map((store) => (
          <div className='shopCol titles'>{store.name}</div>
      ))}
    </li>
  );

  return columns;
};

export default Columns;
