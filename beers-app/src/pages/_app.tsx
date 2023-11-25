import type { AppProps } from 'next/app';
import { Layout } from '../components/screens/layout/layout';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';

import '../styles/globals.scss';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
