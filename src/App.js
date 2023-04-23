import { useEffect } from "react";
import "./App.css";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(() => {
    const ferchPokemonData = async () => {
      //すべてのポケモンを取得す。
      let res = await getAllpokemon();
    };
  }, []);
  return <div className="App"></div>;
}

export default App;
