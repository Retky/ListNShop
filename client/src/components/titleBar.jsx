import "./titleBar.scss";

const titleBar = (props) => {
  const { title } = props;

  const titleBar = (
    <div className="titleBar">
      <h2 className="listTitle">{title}</h2>
    </div>
  );

  return titleBar;
};

export default titleBar;
