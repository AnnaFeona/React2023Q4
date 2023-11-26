import type { AppProps } from 'next/app';
import { Layout } from '../components/screens/layout/layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import '../styles/globals.scss';

export default function App({ Component, ...props }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props} />
      </Layout>
    </Provider>
  );
}
