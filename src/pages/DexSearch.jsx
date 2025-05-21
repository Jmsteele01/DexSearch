import React, { useEffect, useState } from "react";

export default function PokemonSearchPage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dexEntry, setDexEntry] = useState({});

  useEffect(() => {
    async function fetchPokemon() {
      try {
        //fetches the first 151 pokemon (all first gen pokemon)
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        setAllPokemon(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data: ", error);
      }
    }

    fetchPokemon();
  }, []);

  const filteredPokemon = allPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //retrieves each specific pokemon ID
  const getPokemonId = (url) => {
    const pokemonId = url.split("/").filter(Boolean);
    return pokemonId[pokemonId.length - 1]; 
  };

  return (
    <div className="pokemon-page">
      <h1>Pokedex Entry Search!</h1>

      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon..."
        />
      </div>

      <div className="results grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {filteredPokemon.map((pokemon) => {
          const id = getPokemonId(pokemon.url);
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div key={pokemon.name} className="pokemon-card text-center p-2 border rounded shadow">
              <img src={imageUrl} alt={pokemon.name} className="mx-auto" />
              <p className="capitalize">{pokemon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
