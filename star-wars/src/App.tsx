import { Component } from 'react';

import './App.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

export interface AppProps {
  a: number;
  b: string;
}

export interface AppState {
  id: string;
}

class App extends Component {
  // constructor(props: AppProps) {
  //   super(props);
  //   this.state = {
  //     id: "super",
  //   }
  // }

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
