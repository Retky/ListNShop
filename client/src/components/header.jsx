import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

import './styles/header.scss';

const Header = () => {
  const header = (
    <header>
      <nav>
        <FontAwesomeIcon className='burger' icon={faBars} />
      </nav>
      <div className="logo">
        <h1>list N shop</h1>
      </div>
      <div className="userBtn">
        <FontAwesomeIcon className='user' icon={faUser} />
      </div>
    </header>
  );

  return header;
};

export default Header;
