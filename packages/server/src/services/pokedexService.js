import * as pokeapiGateway from '../gateways/pokeapiGateway';

export const getPokemon = async (pokemonName) => (await pokeapiGateway.getPokemon(pokemonName)); 