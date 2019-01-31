import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import { useMappedState } from 'redux-react-hook';

const PokemonDetail = () => {
  const mapState = useCallback((state) => state.detailedPokemon, []);
  const detailedPokemon = useMappedState(mapState);
  
  return detailedPokemon ? (
    <div>
      <ReactSVG src={`../images/pokemons/${detailedPokemon.id}.svg`} />
      <p>{detailedPokemon.name} <small>pokemon ID{detailedPokemon.id}</small></p>
      <ul>
        {detailedPokemon.types.map((pokemonSlot, index) => (<li key={index}>{pokemonSlot.type.name}</li>))}
      </ul>
      <Link to="/pokemons">
        <button>Back to list</button>
      </Link>
    </div>) : <div />;
};

export default PokemonDetail;
