import { handleActions } from 'redux-actions';
import { listAction, detailAction} from '../actions';

const defaultState = {
  list: {
    pokemons: []
  },
  detail: {
    pokemon: {}
  }
};

const pokedexReducer = handleActions({
  [listAction]: (state, { payload: { pokemons }}) => ({ ...state, list: { pokemons }}),
  [detailAction]: (state, { payload: { pokemon }}) => ({ ...state, detail: { pokemon }})
}, defaultState);

export default pokedexReducer;
