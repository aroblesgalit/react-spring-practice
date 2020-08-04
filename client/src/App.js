import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemoryMatch from './pages/MemoryMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MemoryMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
