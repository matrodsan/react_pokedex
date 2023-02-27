import "./Home.css";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";

const Home = () => {
  return (
    <Container>
      <Link to="/pokemons/page/1" className="btn-main">
        Pokemons
      </Link>
    </Container>
  );
};

export default Home;
