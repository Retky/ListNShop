import "./bestTotal.scss";

const finalTotal = (props) => {
  const { bestTotal } = props;

  const finalTotal = (
    <div className="bestTotal">
      <h3 className="total">Best Total: ${bestTotal}</h3>
    </div>
  );

  return finalTotal;
};

export default finalTotal;
