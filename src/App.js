import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/cart"><Cart /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
