import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';
import CustomBrowserRouter from './routes/CustomBrowserRouter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomBrowserRouter>
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/pokemons/:pokemonName" component={PokemonDetail} />
        </CustomBrowserRouter> 
      </div>
    );
  }
}

export default App;