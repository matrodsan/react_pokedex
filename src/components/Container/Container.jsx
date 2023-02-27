import "./Container.css";

const Container = ({ children, customClass }) => {
  return <div className={`main-container ${customClass}`}>{children}</div>;
};

export default Container;
