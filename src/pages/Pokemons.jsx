import "./Pokemons.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import loading from "../assets/Settings.gif";
import Pagination from "../components/Pagination/Pagination";
import { useParams } from "react-router-dom";

const Pokemons = () => {
  const { pageNumber } = useParams();

  const [pokemons, setPokemons] = useState([]);
  const [pageSize, setPageSize] = useState(30);
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);

  function getPokemons() {
    var endpoints = [];
    for (
      let i = pageSize * (page - 1) + 1;
      i <= pageSize + pageSize * (page - 1);
      i++
    ) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        setPokemons(res);
      })
      .catch((err) => console.log(err));
  }

  function getPages() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
      .then((res) => setPages(Math.ceil(res.data.count / pageSize)))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPokemons();
    getPages();
    setPage(pageNumber);
  }, [pageNumber, page]);

  return (
    <div className="main">
      <h1>Pokemons</h1>
      <Container customClass="space">
        {pokemons.length === 0 && <img src={loading} />}
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.data.name}
              name={pokemon.data.name}
              image={pokemon.data.sprites.other.dream_world.front_default}
              id={pokemon.data.id}
            />
          ))}
      </Container>
      <Pagination pages={pages} handlePage={setPage} page={page} />
    </div>
  );
};

export default Pokemons;
