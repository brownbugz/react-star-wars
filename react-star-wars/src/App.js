import React, {Component} from 'react';
import './App.css';
import {Switch} from 'react-router-dom';
import StarshipPage from './pages/StarshipPage/StarshipPage';

class App extends Component {
  state = {
    starships: []
  };

  getStarship(idx) {
    return this.state.starships(idx);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          STAR WARS STARSHIPS
        </header>
        <Switch>
          <StarshipPage />
        </Switch>

      </div>
    );
  }
}

export default App;
