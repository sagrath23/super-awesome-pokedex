import request from 'superagent';

const baseUrl = 'https://pokeapi.co/api/v2/';

export const listPokemons = async (listUrl) => {
    console.log(listUrl, 'url');
    return await request.get(listUrl).set('Access-Control-Allow-Origin', '*');
};

export const getPokemon = async (pokemonName) => {
    const getPokemonEndpoint = `${baseUrl}pokemon/${pokemonName}`;
    return await request.get(getPokemonEndpoint);
}