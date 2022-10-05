import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Inicial from './pages/Inicial';
import Projetos from './pages/Projetos';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" component={ Inicial } />
          <Route exact path="/projetos" component={ Projetos } />
        </Switch>
      </main>
    );
  }
}

export default App;
