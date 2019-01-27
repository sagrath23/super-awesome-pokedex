import request from 'superagent';

const baseUrl = 'https://pokeapi-215911.firebaseapp.com/api/v2/';

export const listPokemons = async (listUrl) => {
    console.log(listUrl, 'url');
    // TODO: make it in backend, using Server Side Rendering...
    return await request.get(listUrl).set('Access-Control-Allow-Origin', '*');
};

export const getPokemon = async (pokemonName) => {
    const getPokemonEndpoint = `${baseUrl}pokemon/${pokemonName}`;
    // TODO: same here
    return await request.get(getPokemonEndpoint).set('Access-Control-Allow-Origin', '*');
}