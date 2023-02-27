import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Pokemons from "./pages/Pokemons";
import SearchPokemon from "./pages/SearchPokemon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="pokemons/page/:pageNumber" element={<Pokemons />} />
          <Route path="pokemon/:id" element={<Pokemon />} />
          <Route path="search" element={<SearchPokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
