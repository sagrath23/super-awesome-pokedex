import { version } from '../../package.json';
import { Router } from 'express';
import * as pokedexController from '../controllers/pokedexController'

export default ({ config, db }) => {
  let api = Router();
  api.use('/ping', (req, res) => {
    res.json({ response: 'Ok' });
  });

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  api.get('/pokemons/:pokemonName', async (req, res) => {
    res.json(await pokedexController.getPokemon(req.params));
  });

  return api;
}