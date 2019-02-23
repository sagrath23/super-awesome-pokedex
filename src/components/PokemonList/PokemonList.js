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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const extractPokemonIDFromURL = (url) => (url.split('/')[6]);

const  PokemonList = (props) => {
  const { classes } = props;
  const mapState = useCallback((state) => state.currentPokemonList, []);
  const currentPokemonList = useMappedState(mapState);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Pokemons</ListSubheader>
        </GridListTile>
        {currentPokemonList.results.map((pokemon, index) => (
          <GridListTile key={index}>
            <img alt="pokemon_sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonIDFromURL(pokemon.url)}.png`} />
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
      <button onClick={() => (currentPokemonList.previous ? dispatch(loadListAction(currentPokemonList.previous)) : null)}>Prev</button>
      <button onClick={() => (currentPokemonList.next ? dispatch(loadListAction(currentPokemonList.next)) : null)}>Next</button>
    </div>
  );
}

PokemonList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PokemonList);
