import { useRouter } from 'next/router';
import { Details } from '../../components/screens/details/details';

const DetailsPage = () => {
  const { query } = useRouter();
  return <Details id={Number(query.id)} />;
};

export default DetailsPage;
