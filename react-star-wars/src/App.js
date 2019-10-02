import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    starships: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          STAR WARS STARSHIPS
        </header>
      </div>
    );
  }
}

export default App;
