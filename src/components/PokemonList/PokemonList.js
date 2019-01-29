import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const extractPokemonIDFromURL = (url) => (url.split('/')[6]);

const PokemonList = ({ currentPokemonList, loadListAction }) => (
  <div>
    <ul>
      {currentPokemonList.results.map((pokemon, index) => (
        <li key={index}>
          <Link to={`/detail/${pokemon.name}`}>
            <img alt="pokemon_sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonIDFromURL(pokemon.url)}.png`} />
            {pokemon.name}
          </Link>
        </li>))}
    </ul>
    <button onClick={() => (currentPokemonList.previous ? loadListAction(currentPokemonList.previous) : null)}>Prev</button>
    <button onClick={() => (currentPokemonList.next ? loadListAction(currentPokemonList.next) : null)}>Next</button>
  </div>);

PokemonList.propTypes = {
  currentPokemonList: PropTypes.object,
  loadListAction: PropTypes.func
};

PokemonList.defaultProps = {
  currentPokemonList: {},
  loadListAction: () => {}
};

export default PokemonList