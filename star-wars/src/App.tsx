import { Component } from 'react';

import './App.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

interface AppProps {}

interface AppState {
  searchRequest: string;
}

class App extends Component<AppProps, AppState> {
  state = {
    searchRequest: '',
  };

  updateData(value: string | undefined) {
    this.setState(() => {
      return { searchRequest: value || '' };
    });
  }

  public render() {
    const { searchRequest } = this.state;
    return (
      <>
        <Header updateSearchRequest={(v) => this.updateData(v)} />
        <Main searchRequest={searchRequest} key={searchRequest} />
      </>
    );
  }
}

export default App;
