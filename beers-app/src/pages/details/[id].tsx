import { useRouter } from 'next/router';
import { Details } from '../../components/screens/details/details';
import { beerApi } from '../../services/beers';
import { wrapper } from '../../store/store';

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
  console.log(query);

  store.dispatch(beerApi.endpoints.getBerrById.initiate('1'));

  Promise.all(store.dispatch(beerApi.util.getRunningQueriesThunk()));

  return { props: { id: 0 } };
});

const DetailsPage = () => {
  const { query } = useRouter();
  return <Details id={Number(query.id)} />;
};

export default DetailsPage;
