import { Popover, message } from 'antd';
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { SwapSettings, SwapInputs } from './';

function Swap({ address, isConnected }) {
  return (
    <div className="tradeBox">
      <div className="tradeBoxHeader">
        <h4>Swap</h4>
        <Popover
          content={SwapSettings}
          title="Setting"
          trigger="click"
          placement="bottomRight"
        >
          <SettingOutlined className="cog"></SettingOutlined>
        </Popover>
      </div>
      <div className="inputs">
        <SwapInputs />
      </div>
    </div>
  );
}

export default Swap;
