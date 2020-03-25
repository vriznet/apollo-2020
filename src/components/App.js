import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Detail} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
