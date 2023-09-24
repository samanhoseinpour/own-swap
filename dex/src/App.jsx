import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useConnect, useAccount } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import Header from './components/Header';
import { Swap, Tokens } from './components';

const App = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
    <div className="App">
      <Header address={address} isConnected={isConnected} connect={connect} />
      <div className="mainWindow">
        <Routes>
          <Route
            path="/"
            element={<Swap isConnected={isConnected} address={address} />}
          ></Route>
          <Route path="/tokens" element={<Tokens />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
