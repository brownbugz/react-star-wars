import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
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
          <Route exact path="/" render={() => 
            <section>
              {this.state.starships.map((starship, idx) =>
                <Link
                  to={`/starship/${idx}`}
                  key={starship.name}
                >
                {starship.name}
                </Link>
              )}
            </section>
          }/>
          <Route path='/starships/:idx' render={(props) => 
            <StarshipPage
              {...props}
              getStarship={this.getStarship}
            />
          }/>
        </Switch>

      </div>
    );
  }
}

export default App;
