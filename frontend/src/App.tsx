import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from 'constants/theme';
import { routes, basename } from 'constants/routes';

import Layout from 'wrappers/Layout';
import Authentication from 'wrappers/Authentication';

import configureStore from 'store';

const pageMap = {
  HomePage: React.lazy(() => import('pages/HomePage')),
  Academics: React.lazy(() => import('pages/Academics')),
  Finances: React.lazy(() => import('pages/Finances')),
  Personal: React.lazy(() => import('pages/Personal')),
  Admissions: React.lazy(() => import('pages/Admissions'))
};

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Authentication>
        <Router>
          <Layout>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {routes.map(({ component, routeProps, componentProps }) => {
                    const Component = pageMap[component];

                    return (
                      <Route
                        key={component}
                        render={() => <Component {...componentProps} />}
                        {...routeProps}
                      />
                    )
                  })}
                </Switch>
            </React.Suspense>
          </Layout>
        </Router>
      </Authentication>
    </ThemeProvider>
  </Provider>
);

export default App;
