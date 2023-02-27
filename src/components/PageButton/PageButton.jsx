import "./PageButton.css";
import { Link } from "react-router-dom";

const PageButton = ({ number, activated, handleClick }) => {
  return (
    // <button
    //   onClick={() => handleClick(number)}
    //   className={`page-button ${activated}`}
    // >
    //   {number}
    // </button>
    <Link to={`/pokemons/page/${number}`} onClick={() => handleClick(number)}>
      <div className={`page-button ${activated}`}>{number}</div>
    </Link>
  );
};

export default PageButton;
