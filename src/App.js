import "./styles.css";
import { useState, useEffect } from "react";
import Cards from "../Components/Cards";
import Search from "../Components/Search";
import Pagination from "../Components/Pagination";
export default function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const goNextPage = () => {
    setAllPokemons([]);
    setLoadPoke(nextUrl);
  };
  const goPrevPage = () => {
    setAllPokemons([]);
    setLoadPoke(prevUrl);
  };
  useEffect(() => {
    console.log("mount");
    fetchPokemons();
  }, [loadPoke]);
  const fetchPokemons = async () => {
    const data = await fetch(loadPoke);
    const response = await data.json();
    setLoadPoke(response);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    // function getAllpokemonobject(result) {
    //   //console.log(result, "result");
    //   result.forEach(async (poke) => {
    //     const res = await fetch(
    //       `https://pokeapi.co/api/v2/pokemon/${poke.name}`
    //     );
    //     const data = await res.json();
    //     setAllPokemons((currentList) => [...currentList, data]);
    //   });
    // }
    getAllpokemonobject(response.results);
  };

  function getAllpokemonobject(result) {
    //console.log(result, "result");
    result.forEach(async (poke) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`);
      const data = await res.json();
      setAllPokemons((currentList) => [...currentList, data]);
    });
  }
  console.log(allPokemons, "pokemons");
  return (
    <div className="App">
      <Search setAllPokemons={setAllPokemons} />
      <Cards allPokemons={allPokemons} />
      <Pagination
        goNextPage={nextUrl ? goNextPage : null}
        goPrevPage={prevUrl ? goPrevPage : null}
      />
    </div>
  );
}
