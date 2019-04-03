import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Layout from './pages/layout';
import history from './routes/history';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route component={Layout} />
          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
