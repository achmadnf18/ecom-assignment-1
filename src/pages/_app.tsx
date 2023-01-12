/* eslint-disable react/function-component-definition */
import '@/styles/globals.css';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from '@/components/layout/layout';
import { persistor, store } from '@/store';
import { theme } from '@/styles/mui/theme';
import createEmotionCache from '@/utils/emotion-cache';

// client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const AllProvider = ({ children }: { children: JSX.Element }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PersistGate>
  </Provider>
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <AllProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AllProvider>
    </CacheProvider>
  );
}
