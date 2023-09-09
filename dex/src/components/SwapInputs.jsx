import { useState } from 'react';

import { Input } from 'antd';
import tokenList from '../tokenList.json';
import { DownOutlined, ArrowDownOutlined } from '@ant-design/icons';

const SwapInputs = () => {
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);

  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);

  const [prices, setPrices] = useState(null);

  const changeAmount = (e) => {
    setTokenOneAmount(e.target.value);
  };

  const switchTokens = () => {
    const one = tokenOne;
    const two = tokenTwo;

    setTokenOne(two);
    setTokenTwo(one);
  };

  return (
    <>
      <Input
        placeholder="0"
        value={tokenOneAmount}
        onChange={changeAmount}
        disabled={!prices}
      />
      <Input placeholder="0" value={tokenTwoAmount} disabled={true} />
      <div className="switchButton" onClick={switchTokens}>
        <ArrowDownOutlined className="switchArrow" />
      </div>
      <div className="assetOne">
        <img src={tokenOne.img} alt="assets one logo" className="assetLogo" />
        {tokenOne.ticker}
        <DownOutlined />
      </div>
      <div className="assetTwo">
        <img src={tokenTwo.img} alt="assets two logo" className="assetLogo" />
        {tokenTwo.ticker}
        <DownOutlined />
      </div>
    </>
  );
};

export default SwapInputs;
