import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import { useMappedState } from 'redux-react-hook';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const PokemonDetail = ({ classes }) => {
  const mapState = useCallback((state) => state.detailedPokemon, []);
  const detailedPokemon = useMappedState(mapState);
  
  return detailedPokemon ? (
    <div className={classes.root}>
      <div className={classes.pokemonInformation}>
        <div className={classes.pokemonImage}>
          <ReactSVG src={`../images/pokemons/${detailedPokemon.id}.svg`} />
        </div>
        <div className={classes.pokemonInfo}>
          <p>{detailedPokemon.name} <small>pokemon ID{detailedPokemon.id}</small></p>
          <ul>
            {detailedPokemon.types.map((pokemonSlot, index) => (<li key={index}>{pokemonSlot.type.name}</li>))}
          </ul>
        </div>
      </div>
      <div className={classes.pokemonAdditionalInfo}>
        Hi
      </div>
      <Link to="/pokemons">
        <button>Back to list</button>
      </Link>
    </div>) : <div />;
};

export default withStyles(styles)(PokemonDetail);
