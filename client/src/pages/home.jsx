import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalLists } from '../redux/lists';
import { fetchLocalShops } from '../redux/shops';
import { fetchLocalItems, updateLocalItemQuantity, incLocalItemQuantity, decLocalItemQuantity } from '../redux/items';
import { fetchLocalPrices } from '../redux/prices';
import '../components/styles/home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const quickList = useSelector((store) => store.lists[store.lists.length-1]);
  const shops = useSelector((store) => store.shops);
  const listItems = useSelector((store) => store.items);
  const prices = useSelector((store) => store.prices);
  const total = {};
  const bestPrices = {};

  useEffect(() => {
    dispatch(fetchLocalLists());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchLocalShops());
    dispatch(fetchLocalItems(quickList.id));
    dispatch(fetchLocalPrices());
  }, [dispatch, quickList]);

  const handleIncrement = (event) => {
    const itemId = parseInt(event.target.getAttribute('item'));
    dispatch(incLocalItemQuantity(itemId));
  };
  const handleDecrement = (event) => {
    const itemId = parseInt(event.target.getAttribute('item'));
    dispatch(decLocalItemQuantity(itemId));
  };
  const handleInputChange = (event) => {
    const itemId = parseInt(event.target.getAttribute('item'));
    const newQuantity = parseInt(event.target.value);
    dispatch(updateLocalItemQuantity(itemId, newQuantity));
  };

  const getBestShop = () => {
    if (Object.keys(bestPrices).length === 0) return null;
    const bestShop = Object.keys(bestPrices).reduce((acc, shopId) => {
      if (bestPrices[shopId] > bestPrices[acc]) {
        return shopId;
      }
      return acc;
    });
    return shops.find((shop) => shop.id === parseInt(bestShop));
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
        {listItems.map((item) => {
          const itemPrices = prices.filter((price) => price.item_id === item.id);
          const bestPrice = itemPrices.reduce((acc, price) => { return acc.price < price.price ? acc : price; });
          return (
            <li key={`item-${item.id}`} className="row">
              <div className="itemCol" >
                <div className="item">
                  <div className="itemCheck">
                    <input type="checkbox" />
                  </div>
                  <div className="itemInfo">
                    <div className="itemName">{item.name}</div>
                    <div className="itemMeasure">
                      <div className="itemQuantity">
                        <div className="unity-bar">
                          <button className="unity-bar__button" onClick={handleDecrement} item={item.id} >-</button>
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
                {shops.map((shop) => {
                  const isBestPrice = bestPrice.shop_id === shop.id;
                  const notPrice = prices.find((price) => price.shop_id === shop.id && price.item_id === item.id) === undefined;
                  const price = prices.find((price) => price.shop_id === shop.id && price.item_id === item.id);
                  const unitPrice = price !== undefined ? price.price : bestPrice.price;
                  const totalPrice = price !== undefined ? `$ ${(price.price * item.quantity).toFixed(2)}` : `$ ${(bestPrice.price * item.quantity).toFixed(2)}`;
                  if (isBestPrice) {
                    if (bestPrices[shop.id] === undefined) {
                      bestPrices[shop.id] = 1;
                    } else {
                      bestPrices[shop.id] += 1;
                    }
                  }
                  if (price !== undefined) {
                    if (total[shop.id] === undefined) {
                      total[shop.id] = price.price * item.quantity;
                    } else {
                      total[shop.id] += price.price * item.quantity;
                    }
                  } else {
                    if (total[shop.id] === undefined) {
                      total[shop.id] = bestPrice.price * item.quantity;
                    } else {
                      total[shop.id] += bestPrice.price * item.quantity;
                    }
                  }
                  return (
                    <div key={`shop-${shop.id}`} className={`price ${isBestPrice ? 'bestPrice' : ''} ${notPrice ? 'notPrice' : ''}`}>
                      <div>
                        {unitPrice}
                      </div>
                      <div className="totalPrice">
                        {totalPrice}
                      </div>
                    </div>
                  )
                })}
              </div>
            </li>
          )
        })}
        <li className='row'>
          <div className='itemCol totalRow'> Total: </div>
          <div className='shopCol'>
            {shops.map((shop) => {
              const isBest = total[shop.id] === Math.min(...Object.values(total));
              return(
                <div key={`shop-${shop.id}`} className={`price ${isBest ? 'bestPrice' : ''}`}>
                  <div>
                    $ {total[shop.id] ? total[shop.id].toFixed(2) : '-'}
                  </div>
                </div>
              )
            })}
          </div>
        </li>
      </ul>
      <div className="bestBar">
        <h3 className="bestTotal">{ getBestShop() ? `Best Prices in: ${getBestShop().name}` : '' }</h3>
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
