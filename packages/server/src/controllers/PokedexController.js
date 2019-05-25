import * as pokedexService from '../services/pokedexService';

export const getPokemon = async ({ pokemonName }) => (await pokedexService.getPokemon(pokemonName));
