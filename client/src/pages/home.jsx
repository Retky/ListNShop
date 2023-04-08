import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalLists } from '../redux/lists';
import { fetchLocalShops } from '../redux/shops';
import { fetchLocalListItems } from '../redux/items';
import '../components/styles/home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const quickList = useSelector((store) => store.lists[store.lists.length-1]);
  const shops = useSelector((store) => store.shops);
  const listItems = useSelector((store) => store.items);

  useEffect(() => {
    dispatch(fetchLocalLists());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchLocalShops());
    dispatch(fetchLocalListItems(quickList ? quickList.id : 0));
  }, [dispatch, quickList]);

  const handleIncrement = () => {
  };

  const handleDecrement = () => {
  };

  const handleInputChange = (event) => {
  };

  const page = (
    <div>
      <div className="titleBar">
        <h2 className="listTitle">{quickList ? quickList.name : 'New List'}</h2>
      </div>
      <ul className="shoppingList">
        <li className="row">
          <div className='itemCol titles'>Item</div>
          <div className='shopCol titles'>
            {shops.map((shop) => (
                <div key={`shop-${shop.id}`} className='price'>{shop.name}</div>
            ))}
          </div>
        </li>
        {listItems.map((item) => (
          <li key={`item-${item.id}`} className="row">
            <div className="itemCol" >
              <div className="item">
                <div className="itemCheck">
                  <input type="checkbox" />
                </div>
                <div className="itemInfo">
                  <div className="itemName">{item.item.name}</div>
                  <div className="itemMeasure">
                    <div className="itemQuantity">

                      <div className="unity-bar">
                        <button className="unity-bar__button" onClick={handleDecrement}>-</button>
                        <input className="unity-bar__input" type="number" value={item.quantity} onChange={handleInputChange} />
                        <button className="unity-bar__button" onClick={handleIncrement}>+</button>
                      </div>
                    </div>
                    <div className="itemUnit">{item.unit}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'shopCol'}>
              {shops.map((shop) => (
                  <div key={`shop-${shop.id}`} className="price">
                    <div>
                      {item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id)?.price || '-'}
                    </div>
                    <div className="totalPrice">
                      {item.prices.find((price) => price.item_id === item.item.id && price.shop_id === shop.id)?.price * item.quantity || '-'}
                    </div>
                  </div>
                )
              )}
            </div>
          </li>
        ))}
        <li className='row'>
          <div className='itemCol totalRow'> Total: </div>
          <div className='shopCol'>
            {shops.map((shop) => (
              <div key={`shop-${shop.id}`} className="price">
                <div>
                  -
                </div>
              </div>
            ))}
          </div>
        </li>
      </ul>
      <div className="bestBar">
        <h3 className="bestTotal">Best Total: $ -</h3>
      </div>
      <footer>
        <div className='button'></div>
        <div className='button'></div>
        <div>
          <div className='addBtn'></div>
        </div>
        <div className='button'></div>
        <div className='button'></div>
      </footer>
    </div>
  );

  return page;
};

export default Home;
