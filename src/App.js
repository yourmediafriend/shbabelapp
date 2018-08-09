import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader'
import store, { history } from './store';
import Routes from './routes';
import client from './graphQL/client'
import { ApolloProvider } from "react-apollo";

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
);

export default hot(module)(App)