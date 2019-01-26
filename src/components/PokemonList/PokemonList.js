import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonList = ({ currentPokemonList, loadListAction }) => (
  <div>
    <ul>
      {currentPokemonList.results.map((pokemon, index) => (<li key={index}><Link to={`/detail/${pokemon.name}`}>{pokemon.name}</Link></li>))}
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