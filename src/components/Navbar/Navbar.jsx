import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Search from "../Search/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="PokedexLogo" className="logo" />
        </Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
