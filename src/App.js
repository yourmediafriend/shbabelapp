import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import Routes from './routes';

import client from './graphQL/client'
import { ApolloProvider } from "react-apollo";

import { StyleRoot } from 'radium';
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