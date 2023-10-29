import { Component } from 'react';

import './App.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

interface AppState {
  searchRequest: string;
}

class App extends Component<object, AppState> {
  state = {
    searchRequest: '',
  };

  updateData(value: string | undefined) {
    if (!value) return;
    this.setState({ searchRequest: value });
  }

  public render() {
    const { searchRequest } = this.state;
    return (
      <>
        <Header updateSearchRequest={(v) => this.updateData(v)} />
        <Main searchRequest={searchRequest} />
      </>
    );
  }
}

export default App;
