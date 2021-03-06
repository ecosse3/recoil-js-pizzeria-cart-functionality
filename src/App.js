import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { theme } from '@theme';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSnackbar } from './hooks';

function App() {
  const { isActive, message } = useSnackbar();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/cart"><Cart /></Route>
        </Switch>
        <Snackbar open={isActive} autoHideDuration={1500} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <MuiAlert elevation={6} variant="filled" severity="success">
            {message}
          </MuiAlert>
        </Snackbar>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
