import React, { useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook'
import { loadListAction, loadPokemonAction } from '../../actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import NavButtons from '../common/NavButtons';
import styles from './styles';

const extractPokemonIDFromURL = (url) => (url.split('/')[6]);

const  PokemonList = ({ classes }) => {
  const mapState = useCallback((state) => state.currentPokemonList, []);
  const currentPokemonList = useMappedState(mapState);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: '50px' }}>
          <ListSubheader component="div">Pokemons</ListSubheader>
        </GridListTile>
        {currentPokemonList.results.map((pokemon, index) => (
          <GridListTile key={index}>
            <img className={classes.pokemonSprite} alt="pokemon_sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonIDFromURL(pokemon.url)}.png`} />
            <GridListTileBar
              title={pokemon.name}
              subtitle={<span>ID: {extractPokemonIDFromURL(pokemon.url)}</span>}
              actionIcon={
                <IconButton className={classes.icon} onClick={() => dispatch(loadPokemonAction(pokemon.name))}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>))}
      </GridList>
      <NavButtons items={[{label: 'Back', icon: <ArrowBack />}, {label: 'Next', icon: <ArrowForward />}]} />
      <button onClick={() => (currentPokemonList.previous ? dispatch(loadListAction(currentPokemonList.previous)) : null)}>Prev</button>
      <button onClick={() => (currentPokemonList.next ? dispatch(loadListAction(currentPokemonList.next)) : null)}>Next</button>
    </div>
  );
}

PokemonList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PokemonList);
