import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader'
import store, { history } from './store';
import Routes from './routes';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { InMemoryCache } from 'apollo-cache-inmemory';



//console.log(client);
//client.resetStore();

//client.cache.reset()

const TESTQL = gql`
  {
    nodeQuery {
      entities {
        ... on Node {
          nid
        }
      }
    }
  }
`;

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://admin.shbabel.com/graphql",
  cache
});

client
  .query({
    query: TESTQL,
    loading: false,
    networkStatus: 7,
    stale: false
  })
  .then(({data}) => console.log({ data }));




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