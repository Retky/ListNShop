import './rows.scss';

const TotalRow = (props) => {
  const { shops, totals } = props;

   const totalRow = (
    <li className='row'>
      <div className='itemCol totalRow'> Total: </div>
      <div className='shopCol'>
        {shops.map((shop) => (
          <div key={`shop-${shop.id}`} className="price">
            <div>
              {totals[shop.id] ? `$${totals[shop.id]}` : '-'}
            </div>
          </div>
        ))}
      </div>
    </li>
  );

  return totalRow;
}

export default TotalRow;