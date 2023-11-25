import Home from '../components/screens/home/home';
import { beerApi } from '../services/beers';
import { wrapper } from '../store/store';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(beerApi.endpoints.getBeerByName.initiate({}));

  Promise.all(store.dispatch(beerApi.util.getRunningQueriesThunk()));

  return { props: {} };
});

const HomePage = () => {
  return <Home />;
};

export default HomePage;
