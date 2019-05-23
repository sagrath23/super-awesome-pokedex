import { version } from '../../package.json';
import { Router } from 'express';
import * as PokedexController from '../controllers/PokedexController'

export default ({ config, db }) => {
  let api = Router();
  api.use('/ping', (req, res) => {
    res.json({ response: 'Ok' });
  });

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  api.get('/pokemon/:pokemonName', (req, res) => {
    res.json(PokedexController.getPokemon(req.params))
  });

  return api;
}