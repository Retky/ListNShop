import { useState } from 'react';

import './unitBox.scss';

const UnitBox = (props) => {
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

  return (
    <div className="unity-bar">
      <button className="unity-bar__button" onClick={handleDecrement}>-</button>
      <input className="unity-bar__input" type="number" value={value} onChange={handleInputChange} />
      <button className="unity-bar__button" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default UnitBox;