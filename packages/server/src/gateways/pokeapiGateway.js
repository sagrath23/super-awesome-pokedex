import request from 'superagent';
import config from 'config';

export const getPokemon = async (pokemonName) => {
  const response = await request.get(`${config.pokeapiUrl}pokemon/${pokemonName}/`).set('Access-Control-Allow-Origin', '*');

  return JSON.parse(response.text);
};
