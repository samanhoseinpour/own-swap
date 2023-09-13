import { useState } from 'react';

import { Input, Modal } from 'antd';
import tokenList from '../tokenList.json';
import { DownOutlined, ArrowDownOutlined } from '@ant-design/icons';

const SwapInputs = () => {
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);

  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);

  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);

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

  const openModal = (asset) => {
    setChangeToken(asset);
    setIsOpen(true);
  };

  const modifyToken = (i) => {
    changeToken === 1 ? setTokenOne(tokenList[i]) : setTokenTwo(tokenList[i]);

    setIsOpen(false);
  };

  return (
    <>
      <Modal
        title="Select a Token"
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <div className="modalContent">
          {tokenList &&
            tokenList.map((e, i) => {
              return (
                <div
                  className="tokenChoice"
                  key={i}
                  onClick={() => modifyToken(i)}
                >
                  <img src={e.img} alt={e.ticker} className="tokenLogo" />
                  <div className="tokenChoiceNames">
                    <div className="tokenName">{e.name}</div>
                    <div className="tokenTicker">{e.ticker}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </Modal>

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
      <div className="assetOne" onClick={() => openModal(1)}>
        <img src={tokenOne.img} alt="assets one logo" className="assetLogo" />
        {tokenOne.ticker}
        <DownOutlined />
      </div>
      <div className="assetTwo" onClick={() => openModal(2)}>
        <img src={tokenTwo.img} alt="assets two logo" className="assetLogo" />
        {tokenTwo.ticker}
        <DownOutlined />
      </div>
    </>
  );
};

export default SwapInputs;
