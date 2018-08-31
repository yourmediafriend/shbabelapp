import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader'
import store, { history } from './store';
import Routes from './routes';
import ScrollToTop from './components/ScrollTop';


import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: "http://admin.shbabel.com/graphql",
      credentials: "include",
    })
  ]),
  cache: new InMemoryCache()
});

const App = () => {

  //console.log(store.getState())

  return (
    <ApolloProvider client={client}>
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>
  );
}

 export default App;

//export default hot(module)(App)