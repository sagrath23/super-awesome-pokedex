import React, { useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook'
import { loadListAction, loadPokemonAction } from '../../actions';

const extractPokemonIDFromURL = (url) => (url.split('/')[6]);

const PokemonList = () => {
  const mapState = useCallback((state) => state.currentPokemonList, []);
  const currentPokemonList = useMappedState(mapState);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {currentPokemonList.results.map((pokemon, index) => (
          <li key={index} onClick={() => dispatch(loadPokemonAction(pokemon.name))}>
            <img alt="pokemon_sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonIDFromURL(pokemon.url)}.png`} />
            {pokemon.name}
          </li>))}
      </ul>
      <button onClick={() => (currentPokemonList.previous ? dispatch(loadListAction(currentPokemonList.previous)) : null)}>Prev</button>
      <button onClick={() => (currentPokemonList.next ? dispatch(loadListAction(currentPokemonList.next)) : null)}>Next</button>
    </div>);
} 

export default PokemonList