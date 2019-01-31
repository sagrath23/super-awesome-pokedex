import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
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
            <Route exact path="/pokemons" component={PokemonList} />
            <Route path="/pokemons/:pokemonName" component={PokemonDetail} />
          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
