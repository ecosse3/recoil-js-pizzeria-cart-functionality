import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/cart"><Cart /></Route>
      </Switch>
    </Router>
  );
}

export default App;
