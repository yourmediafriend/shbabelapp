import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';


import { hot } from 'react-hot-loader'
import { StyleRoot } from 'radium';
import store, { history } from './store';
import Routes from './routes';

import client from './graphQL/client'
import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <StyleRoot>
          <Routes />
        </StyleRoot>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
);


export default App;

//export default hot(module)(App)