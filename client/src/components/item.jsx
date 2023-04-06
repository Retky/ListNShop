import { useState } from 'react';
import UnitBox from './unitBox';

import './item.scss'

const Item = (props) => {
  const { item } = props;

  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };


  const element = (
    <div className="item">
      <div className="itemCheck">
        <input type="checkbox" />
      </div>
      <div className="itemInfo">
        <div className="itemName">{item.item.name}</div>
        <div className="itemMeasure">
          <div className="itemQuantity">
            <UnitBox value={value} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleInputChange={handleInputChange} />
          </div>
          <div className="itemUnit">{item.unit}</div>
        </div>
      </div>
    </div>
  );

  return element;
};

export default Item;
