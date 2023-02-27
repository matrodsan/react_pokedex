import Container from "../components/Container/Container";
import BasicInfo from "../components/BasicInfo/BasicInfo";
import { useSearchParams } from "react-router-dom";
import loading from "../assets/Settings.gif";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchPokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  console.log(query);

  const getSearchedPokemon = (url) => {
    setErrorMessage("");
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${url.toLowerCase()}`)
      .then((resp) => {
        setPokemon(resp.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getSearchedPokemon(query);
  }, [query]);

  return (
    <Container>
      {isLoading ? (
        <img src={loading} />
      ) : errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : (
        <BasicInfo
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          height={pokemon.height}
          weight={pokemon.weight}
          img={pokemon.sprites.other.dream_world.front_default}
          stats={pokemon.stats}
        />
      )}
    </Container>
  );
};

export default SearchPokemon;
