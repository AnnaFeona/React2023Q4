import { FC, useState } from 'react';

import './App.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

const App: FC = () => {
  const [searchRequest, setSearchRequest] = useState('');

  return (
    <>
      <Header updateSearch={setSearchRequest} />
      <Main searchRequest={searchRequest} key={searchRequest} />
    </>
  );
};

export default App;
