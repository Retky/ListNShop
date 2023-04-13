import './styles/header.scss';

const Header = () => {
  const header = (
    <header>
      <nav>
        Burger
      </nav>
      <div className="logo">
        <h1>list N shop</h1>
      </div>
      <div className="userBtn">
        User
      </div>
    </header>
  );

  return header;
};

export default Header;
