import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemoryMatch from './pages/MemoryMatch';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/memory-match'>
          <MemoryMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
