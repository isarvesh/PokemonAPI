import React, { useState } from 'react';
import Search from './Search';
import Pokemon from './Pokemon';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  const searchPokemon = async (query) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`); const data = await response.json();

  setPokemon(data);
  setError('');
} catch (error) {
  console.error(error);
  setPokemon(null);
  setError(`No results found for "${query}"`);
}
};

return ( <div className="App"> <h1>Pokémon API</h1> <Search searchPokemon={searchPokemon} /> {error && <p className="error">{error}</p>} {pokemon && <Pokemon pokemon={pokemon} />} </div> ); }

export default App;