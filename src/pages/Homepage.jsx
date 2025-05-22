import "./Homepage.css";
import dex from "../assets/Dex.png";


export default function Homepage() {
  return (
    <div>
  <h1>Pokedex Searcher</h1>
  <p>This website is a search tool to find terms written in a Pokemon's original Pokedex entry.</p>
  <img src={dex}></img>
</div>
);
}
