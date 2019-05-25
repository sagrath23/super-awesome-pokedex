import request from 'superagent';
import config from '../config';

// TODO: make it in backend, using Server Side Rendering...
// TODO: make it request to get specie of a selected pokemon
export const listPokemons = async (listUrl) => (await request.get(listUrl).set('Access-Control-Allow-Origin', '*'));

export const getPokemon = async (pokemonName) => (await request.get(`${config.serverUrl}/api/pokemons/${pokemonName}/`));
