// import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/screens/layout/layout';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
