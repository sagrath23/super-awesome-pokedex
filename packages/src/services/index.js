import request from 'superagent';

const baseUrl = 'https://pokeapi-215911.firebaseapp.com/api/v2/';

// TODO: make it in backend, using Server Side Rendering...
// TODO: make it request to get specie of a selected pokemon
export const listPokemons = async (listUrl) => (await request.get(listUrl).set('Access-Control-Allow-Origin', '*'));

export const getPokemon = async (pokemonName) => (await request.get(`${baseUrl}pokemon/${pokemonName}/`).set('Access-Control-Allow-Origin', '*'));
