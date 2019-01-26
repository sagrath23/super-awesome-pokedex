import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PokemonListContainer } from './components/PokemonList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={PokemonListContainer} />
          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
