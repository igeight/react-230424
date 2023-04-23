import { useEffect } from "react";
import "./App.css";
import { getAllpokemon } from "./utils/pokemon.js";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(() => {
    const ferchPokemonData = async () => {
      //すべてのポケモンを取得す。
      let res = await getAllpokemon(initialURL);
      console.log(res);
    };
    ferchPokemonData();
  }, []);
  return <div className="App"></div>;
}

export default App;
