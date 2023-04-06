import './unitBox.scss';

const UnitBox = (props) => {
  const { value, handleDecrement, handleIncrement, handleInputChange } = props;

  return (
    <div className="unity-bar">
      <button className="unity-bar__button" onClick={handleDecrement}>-</button>
      <input className="unity-bar__input" type="number" value={value} onChange={handleInputChange} />
      <button className="unity-bar__button" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default UnitBox;
