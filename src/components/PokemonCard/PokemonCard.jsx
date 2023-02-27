import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

const PokemonCard = ({ name, image, id }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="card">
        <span>{id}</span>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default PokemonCard;
