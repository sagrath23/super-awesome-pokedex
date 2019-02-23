import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Layout from './pages/layout';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';
import history from './routes/history';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route component={Layout} />
            <Switch>
              <Route exact path="/pokemons" component={PokemonList} />
              <Route exact path="/pokemons/:pokemonName" component={PokemonDetail} />
            </Switch>
          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
