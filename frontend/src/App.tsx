import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from 'constants/theme';

import LoginPage from 'wip/LoginPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <LoginPage />
  </ThemeProvider>
);

export default App;
