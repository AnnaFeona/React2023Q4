import { Component } from 'react';
import { Person, SwapiSearch, SwapiURL } from '../../model';
import { Card } from '../card/card';
import { Loader } from '../loader/loader';

import './main.scss';

export interface MainState {
  searchRequest: string;
  searchResult: SwapiSearch<Person>;
  isLoading: boolean;
}

export interface MainProps {
  searchRequest: string;
}

export class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      searchRequest: props.searchRequest,
      searchResult: {
        count: 0,
        next: null,
        previous: null,
        results: [],
      },
      isLoading: false,
    };
  }

  private readonly url = `${SwapiURL.people}?search=`;

  static getDerivedStateFromProps(props: MainProps) {
    return { searchRequest: props.searchRequest };
  }

  componentDidMount(): void {
    this.getCards();
  }

  componentDidUpdate(prevProps: Readonly<MainProps>, prevState: Readonly<MainState>): void {
    if (prevProps.searchRequest !== this.props.searchRequest || prevState.searchRequest != this.state.searchRequest) {
      this.getCards();
    }
  }

  getCards(): void {
    const { searchRequest } = this.state;

    this.setState({ isLoading: true });

    fetch(`${this.url}${searchRequest}`)
      .then((res) => res.json())
      .then((people) => {
        this.setState({ isLoading: false });
        this.setState(() => {
          return { searchResult: people };
        });
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }

  render() {
    const { searchResult, isLoading } = this.state;
    const { results } = searchResult;

    return (
      <>
        <main className="main">
          <h1 className="logo">StarWars</h1>
          <div className="container">
            {!results.length && !isLoading ? 'Not found :(' : ''}
            {!isLoading ? results.map((person) => <Card person={person} key={person.url} />) : <Loader />}
          </div>
        </main>
      </>
    );
  }
}
