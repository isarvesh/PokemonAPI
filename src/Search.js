import React, { useState } from 'react';

function Search(props) {
  const [query, setQuery] = useState('bulbasaur');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchPokemon(query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleInputChange} placeholder="Enter Pokémon name or ID" />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
