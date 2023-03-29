import "./listBar.scss";

const listBar = (props) => {
  const { title } = props;
  return (
    <div className="listBar">
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default listBar;
