import { useState } from "react";
import Button from "react-bootstrap/Button";
const Search = ({ setAllPokemons }) => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const searchData = async (e) => {
    e.preventDefault();
    setAllPokemons([]);
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
    );
    const res = await data.json();
    console.log(res);
    //setAllPokemons((currentList) => [...currentList, res]);
    setAllPokemons([res]);
    setSearchPokemon("");
  };

  return (
    <div className="search-bar">
      <input
        className="input-text"
        type="text"
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
      />
      <Button variant="secondary" onClick={searchData}>
        Search
      </Button>
    </div>
  );
};
export default Search;
