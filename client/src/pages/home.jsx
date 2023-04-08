import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalLists } from '../redux/lists';

import TitleBar from '../components/titleBar';
import List from '../components/list';
import BestTotal from '../components/bestTotal';
import Footer from '../components/footer';

const Home = () => {
  const dispatch = useDispatch();
  const quickList = useSelector((store) => store.lists[store.lists.length-1]);

  useEffect(() => {
    dispatch(fetchLocalLists()); // eslint-disable-next-line
  }, []);

  const page = (
    <div>
      <TitleBar title={quickList ? quickList.name : 'New List'} />
      <List id={quickList ? quickList.id : 0} />
      <BestTotal />
      <Footer />
    </div>
  );

  return page;
};

export default Home;
