import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalLists } from '../redux/lists';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const quickList = useSelector((store) => store.lists[store.lists.length-1]);

  useEffect(() => {
    dispatch(fetchLocalLists()); // eslint-disable-next-line
  }, []);

  const page = (
    <div>
      <div className="titleBar">
        <h2 className="listTitle">{quickList ? quickList.name : 'New List'}</h2>
      </div>
      {/*
      <List id={quickList ? quickList.id : 0} />
      <BestTotal />
      */}
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
