import TitleBar from '../components/titleBar';
import List from '../components/list';

const home = () => {
  const page = (
    <div>
      <TitleBar title="Quick List" />
      <List />
    </div>
  );

  return page;
};

export default home;
