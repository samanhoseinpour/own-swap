import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import { Swap, Tokens } from './components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap />}></Route>
          <Route path="/tokens" element={<Tokens />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
