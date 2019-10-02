import React, {Component} from 'react';
import './App.css';
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
        <StarshipPage />


      </div>
    );
  }
}

export default App;
