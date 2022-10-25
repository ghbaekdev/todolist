import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
