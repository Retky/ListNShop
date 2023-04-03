import './items.scss'

const Columns = (props) => {
  const { shops } = props;

  const defaultStore = shops.length ? [] : [{ name: 'Default' }];

  const columns = (
    <li key={'titles'} className="row">
      <div key={'titleItem'} className='itemCol titles'>Item</div>
      <div key={'titleShops'} className='shopCol titles'>
        {[...defaultStore, ...shops].map((store) => (
            <div key={`store-${store.id}`}>{store.name}</div>
        ))}
      </div>
    </li>
  );

  return columns;
};

export default Columns;
