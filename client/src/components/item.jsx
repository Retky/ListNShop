import UnitBox from './unitBox';

import './item.scss'

const Item = (props) => {
  const { item } = props;

  const element = (
    <div className="item">
      <div className="itemCheck">
        <input type="checkbox" />
      </div>
      <div className="itemInfo">
        <div className="itemName">{item.item.name}</div>
        <div className="itemMeasure">
          <div className="itemQuantity">
            <UnitBox />
          </div>
          <div className="itemUnit">{item.unit}</div>
        </div>
      </div>
    </div>
  );

  return element;
};

export default Item;
