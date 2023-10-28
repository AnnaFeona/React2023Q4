import { Component } from 'react';

import './App.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

class App extends Component {
  public render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
