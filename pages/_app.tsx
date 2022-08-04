import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Components from '../components';
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);
  if (pageProps?.statusCode === 404) {
    return <ErrorPage statusCode={pageProps.statusCode} />
  }

  return (
    <ThemeProvider attribute="class">
      <Components.Layout.Content>
        <Components.Header.Content />
        <Component {...pageProps} />
      </Components.Layout.Content>
    </ThemeProvider>
  );
}

export default MyApp;
