import { version } from '../../package.json';
import { Router } from 'express';

export default ({ config, db }) => {
  let api = Router();
  api.use('/ping', (req, res) => {
    res.json({ response: 'Ok' });
  });

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
}