import "./Stat.css";

const Stat = ({ name, value, type }) => {
  return <p className={`stat ${type}`}><span>{name}:</span> {value}</p>;
};

export default Stat;
