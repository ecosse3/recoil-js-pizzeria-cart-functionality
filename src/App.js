import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { theme } from './utils/theme';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/cart"><Cart /></Route>
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  );
}

export default App;
