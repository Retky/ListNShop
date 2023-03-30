import TitleBar from '../components/titleBar';
import List from '../components/list';
import BestTotal from '../components/bestTotal';
import Footer from '../components/footer';

const home = () => {
  const page = (
    <div>
      <TitleBar title="Quick List" />
      <List />
      <BestTotal />
      <Footer />
    </div>
  );

  return page;
};

export default home;
