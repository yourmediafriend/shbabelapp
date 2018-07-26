import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { hot } from 'react-hot-loader'
import { StyleRoot } from 'radium';
import store, { history } from './store';
import Routes from './routes';

const App = () => (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <StyleRoot>
        <Routes />
      </StyleRoot>
    </ConnectedRouter>
  </Provider>
);


export default App;

//export default hot(module)(App)