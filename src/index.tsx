import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Router from './Router';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  </RecoilRoot>
);
