import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
class PokemonDetail extends Component {
  constructor(props) {
    super(props);
    // dispatch action to load new pokemon info
    props.loadPokemonAction(props.match.params.pokemonName);
  }

  render(){
      const { detailedPokemon } = this.props;
      return detailedPokemon ? (
        <div>
          <ReactSVG src={`./images/pokemons/${detailedPokemon.id}.svg`} />
          <p>{detailedPokemon.name} <small>pokemon ID{detailedPokemon.id}</small></p>
          <ul>
            {detailedPokemon.types.map((pokemonSlot, index) => (<li key={index}>{pokemonSlot.type.name}</li>))}
          </ul>
          <Link to="/">
            <button>Back to list</button>
          </Link>
        </div>) : null;
  }
}

export default PokemonDetail;