import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleXmark, faTrash } from '@fortawesome/free-solid-svg-icons';

import { fetchLocalLists } from '../redux/lists';
import { fetchLocalShops, addLocalShop, updateLocalShop, deleteLocalShop } from '../redux/shops';
import { fetchLocalItems, updateLocalItemQuantity, incLocalItemQuantity, decLocalItemQuantity, addLocalItem, deleteLocalItem } from '../redux/items';
import { fetchLocalPrices, updateLocalPrice, addLocalPrice } from '../redux/prices';
import '../components/styles/home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const quickList = useSelector((store) => store.lists.length -1); 
  const shops = useSelector((store) => store.shops);
  const listItems = useSelector((store) => store.items);
  const prices = useSelector((store) => store.prices);
  const total = {};
  const bestPrices = {};
  const [showForm, setShowForm] = useState(false);
  const [showShops, setShowShops] = useState(false);

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
    const newQuantity = parseFloat(event.target.value);
    dispatch(updateLocalItemQuantity(itemId, newQuantity));
  };
  const handleSetPrice = (e) => {
    const itemId = parseInt(e.target.getAttribute('item'));
    const shopId = parseInt(e.target.getAttribute('shop'));
    const newPrice = parseFloat(e.target.value).toFixed(2);
    e.target.value = newPrice;
    dispatch(updateLocalPrice( newPrice, itemId, shopId));
  };
  const handlePriceChange = () => {};
  const handleAddItem = () => {
    setShowForm(true);
  };
  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    const itemName = e.target['item-name'].value;
    const itemQuantity = e.target['item-quantity'].value;
    const itemUnit = e.target['item-unit'].value;
    const item = dispatch(addLocalItem(itemName, itemQuantity, itemUnit));
    const newPrices = [];
    shops.forEach((shop) => {
      const price = Number(e.target[`item-price-${shop.id}`].value).toFixed(2);
      newPrices.push({
        price,
        item_id: item.itemId,
        shop_id: shop.id,
      });
    });
    dispatch(addLocalPrice(newPrices));
    e.target.reset();
    setShowForm(false);
  };
  const handleDelItem = (e) => {
    const itemId = parseInt(e.target.parentNode.getAttribute('item'));
    dispatch(deleteLocalItem(itemId));
  };
  const handleAddShopSubmit = (e) => {
    e.preventDefault();
    const shopName = e.target['shop-name'].value;
    dispatch(addLocalShop(shopName));
    e.target.reset();
    setShowShops(false);
  };
  const handleModShopSubmit = (e) => {
    const shopId = parseInt(e.target.getAttribute('shop'));
    const shopName = e.target.innerText
    dispatch(updateLocalShop(shopName, shopId));
  };
  const handleModShopClick = (e) => {
    e.target.setAttribute('contentEditable', true);
  };
  const handleDelShop = (e) => {
    const shopId = parseInt(e.target.parentNode.getAttribute('shop'));
    dispatch(deleteLocalShop(shopId));
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
  
  const itemForm = (
    <div className="itemFormContainer" style={showForm ? { display: 'flex' } : { display: 'none' }}>
      <form className="itemForm" onSubmit={handleAddItemSubmit}>
        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setShowForm(false)} />
        <div className="itemForm__row">
          <label className="itemForm__label" htmlFor="item-name">Item Name</label>
          <input className="itemForm__input" type="text" name="item-name" required />
        </div>
        <div className="itemForm__row">
          <label className="itemForm__label" htmlFor="item-quantity">Quantity</label>
          <input className="itemForm__input" type="number" step="0.05" name="item-quantity" defaultValue={0} />
        </div>
        <div className="itemForm__row">
          <label className="itemForm__label" htmlFor="item-unit">Unit</label>
          <input className="itemForm__input" type="text" name="item-unit" required />
        </div>
        <div className="itemForm__row">
          <label className="itemForm__label" htmlFor="item-price">Prices</label>
          {shops.map((shop) => (
            <div key={`shop-${shop.id}`} className="itemForm__row">
              <label className="itemForm__label" htmlFor={`item-price-${shop.id}`}>{shop.name}</label>
              <input className="itemForm__input" type="number" step="0.05" name={`item-price-${shop.id}`} defaultValue={0.00} />
            </div>
          ))}
          <button className="itemForm__button" type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
  const shopForm = (
    <div className="shopFormContainer">
      <form className="shopForm" onSubmit={handleAddShopSubmit}>
        <div className="shopForm__row">
          <input className="shopForm__input" type="text" name="shop-name" required />
        <button className="shopForm__button" type="submit">Add Shop</button>
        </div>
      </form>
    </div>
  );
  const shopsList = (
    <div className="shopListContainer" style={showShops ? { display: 'flex' } : { display: 'none' }}>
      <div className="shopsView">
        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setShowShops(false)} />
        <ul className="shopList">
          {shops.map((shop) => (
            <div key={`shop-${shop.id}`} className="price" onClick={handleModShopClick} onBlur={handleModShopSubmit} shop={shop.id}>
              {shop.name}
              {' '}
              <FontAwesomeIcon icon={faTrash} onClick={handleDelShop} shop={shop.id} />
            </div>
          ))}
          {shopForm}
        </ul>
      </div>
    </div>
  );
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
          const bestPrice = {};
          if (itemPrices.length !== 0) {
            const newBestPrice = itemPrices.reduce((acc, price) => { return acc.price < price.price ? acc : price; });
            bestPrice.price = newBestPrice.price;
            bestPrice.shop_id = newBestPrice.shop_id;
            bestPrice.item_id = newBestPrice.item_id;
            bestPrice.id = newBestPrice.id;
          }
          return (
            <li key={`item-${item.id}`} className="row">
              <div className="itemCol" >
                <div className="item">
                  <div className="itemCheck">
                    <input type="checkbox" />
                  </div>
                  <div className="itemInfo">
                    <div className="itemName">
                      <p>{item.name}</p>
                      <FontAwesomeIcon icon={faTrash} onClick={handleDelItem} item={item.id} />
                    </div>
                    <div className="itemMeasure">
                      <div className="itemQuantity">
                        <div className="unity-bar">
                          <button className="unity-bar__button" onClick={handleDecrement} item={item.id} >-</button>
                          <input className="unity-bar__input" type="number" step="0.05" value={item.quantity} onChange={handleInputChange} item={item.id} />
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
                  const notPrice = prices.find((price) => price.shop_id === shop.id && price.item_id === item.id) === undefined;
                  const price = prices.find((price) => price.shop_id === shop.id && price.item_id === item.id);
                  let isBestPrice = false;
                  if (price !== undefined) {
                    isBestPrice = price.price === bestPrice.price;
                  }
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
                      <input type="number" step={0.01} className="unitPrice" defaultValue={unitPrice} onBlur={handleSetPrice} onChange={handlePriceChange} item={item.id} shop={shop.id} />
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
      <div className="bestBarContainer">
        <div className="bestBar">
          <h3 className="bestTotal">{ getBestShop() ? `Best Price in: ${getBestShop().name}` : '' }</h3>
        </div>
      </div>
      {itemForm}
      {shopsList}
      <footer>
        <div className='button'>Save</div>
        <div className='button'>Lists</div>
        <div>
          <div className='addBtn' onClick={handleAddItem}>
            <FontAwesomeIcon className='plus' icon={faPlus} />
          </div>
        </div>
        <div className='button' onClick={() => setShowShops(true)}>Shops</div>
        <div className='button'>Items</div>
      </footer>
    </div>
  );
  return page;
};

export default Home;
