import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Components from '../components';
import ErrorPage from 'next/error'
import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps?.statusCode === 404) {
    return <ErrorPage statusCode={pageProps.statusCode} />
  }

  console.log(pageProps);

  return (
    <ThemeProvider attribute="class">
      <Components.Layout.Content>
        <Components.Header.Content />
        <Component {...pageProps} />
      </Components.Layout.Content>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
