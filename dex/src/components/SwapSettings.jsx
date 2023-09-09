import { useState } from 'react';
import { Radio } from 'antd';

const SwapSettings = () => {
  const [slippage, setSlippage] = useState(2.5);

  const handleSlippageChange = (e) => {
    setSlippage(e.target.value);
  };

  return (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
};

export default SwapSettings;
