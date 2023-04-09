import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalLists } from '../redux/lists';
import { fetchLocalShops } from '../redux/shops';
import { fetchLocalListItems } from '../redux/items';
import { fetchLocalPrices } from '../redux/prices';
import '../components/styles/home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const quickList = useSelector((store) => store.lists[store.lists.length-1]);
  const shops = useSelector((store) => store.shops);
  const listItems = useSelector((store) => store.items);
  const prices = useSelector((store) => store.prices);
  const totals = {};

  console.log(prices);
  console.log('item', listItems);

  useEffect(() => {
    dispatch(fetchLocalLists());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchLocalShops());
    dispatch(fetchLocalListItems(quickList.id));
    dispatch(fetchLocalPrices());
  }, [dispatch, quickList]);

  const handleIncrement = (event) => {
    const itemId = event.target.getAttribute('item');
    console.log(itemId);
  };
  const handleDecrement = (event) => {
    const itemId = event.target.getAttribute('item');
    console.log(itemId);
  };
  const handleInputChange = (event) => {
    const itemId = event.target.getAttribute('item');
    console.log(itemId);
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
                        <button className="unity-bar__button" onClick={handleDecrement} item={item.id}>-</button>
                        <input className="unity-bar__input" type="number" value={item.quantity} onChange={handleInputChange} item={item.id} />
                        <button className="unity-bar__button" onClick={handleIncrement} item={item.id}>+</button>
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
                      {prices.find((price) => price.shop_id === shop.id && price.item_id === item.item.id)?.price || '-'}
                    </div>
                    <div className="totalPrice">
                      {prices.find((price) => price.shop_id === shop.id && price.item_id === item.item.id)?.price * item.quantity || '-'}
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
                  {totals[shop.id] || '-'}
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
