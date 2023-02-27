import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Busque um pokemon"
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
