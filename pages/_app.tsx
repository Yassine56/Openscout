import { AppProps } from 'next/app';
import { ThemeProvider } from '@chakra-ui/core';

import { CUSTOM_THEME } from '../styles/chakra';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={CUSTOM_THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
