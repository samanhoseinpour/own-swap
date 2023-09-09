import { Link } from 'react-router-dom';

import Logo from '../moralis-logo.svg';
import Eth from '../eth.svg';

const Header = ({ address, isConnected, connect }) => {
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="own-swap logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="ethereum logo" className="eth" />
          Ethereum
        </div>
        <div className="connectButton">Connect</div>
      </div>
    </header>
  );
};

export default Header;
