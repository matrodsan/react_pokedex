import "./Pokemon.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import loadingBar from "../assets/Settings.gif";
import BasicInfo from "../components/BasicInfo/BasicInfo";

const Pokemon = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => {
        //console.log(resp.data);
        setPokemon(resp.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container customClass="column">
      {loading ? (
        <img src={loadingBar} />
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

export default Pokemon;
