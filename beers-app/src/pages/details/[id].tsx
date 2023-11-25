import { useRouter } from 'next/router';
import { Details } from '../../components/screens/details/details';

const DetailsPage = () => {
  const { query, pathname, asPath } = useRouter();
  console.log(query, pathname, asPath);

  return <Details />;
};

export default DetailsPage;
