import { useEffect } from 'react';
import TitleBar from '../components/titleBar';
import List from '../components/list';
import BestTotal from '../components/bestTotal';
import Footer from '../components/footer';
import { useSelector, useDispatch } from 'react-redux';

import { fetchLocalLists } from '../redux/lists/lists';

const Home = () => {
  const dispatch = useDispatch();
  const quickList = useSelector((store) => store.lists[0]);

  useEffect(() => {
    dispatch(fetchLocalLists()); // eslint-disable-next-line
  }, []);

  const page = (
    <div>
      <TitleBar title={quickList ? quickList.name : 'New List'} />
      <List />
      <BestTotal />
      <Footer />
    </div>
  );

  return page;
};

export default Home;
