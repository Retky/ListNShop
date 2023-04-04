import "./bestTotal.scss";

const finalTotal = (props) => {
  const { bestTotal } = props;

  const finalTotal = (
    <div className="bestBar">
      <h3 className="bestTotal">Best Total: ${bestTotal}</h3>
    </div>
  );

  return finalTotal;
};

export default finalTotal;
