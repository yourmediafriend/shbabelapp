import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader'
import store, { history } from './store';
import Routes from './routes';
import ScrollToTop from './components/ScrollTop';
import { ApolloProvider } from "react-apollo";
import client from "./graphQL/client";
import { CookiesProvider } from 'react-cookie';

/*Test*/
import RefTest from "./components/RefTest";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <Provider store={ store }>
          <ConnectedRouter history={ history }>
            <ScrollToTop>
              <Routes />
            </ScrollToTop>
          </ConnectedRouter>
        </Provider>
      </CookiesProvider>
    </ApolloProvider>
  );
}

export default App;

//export default hot(module)(App)