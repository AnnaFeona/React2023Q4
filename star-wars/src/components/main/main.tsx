import { Component } from 'react';
import { Person, SwapiSearch, SwapiURL } from '../../model';
import { Card } from '../card/card';

import './main.scss';

export interface MainState {
  searchRequest: string;
  searchResult: SwapiSearch<Person>;
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
    };
  }

  private readonly url = `${SwapiURL.people}?search=`;

  static getDerivedStateFromProps(props: MainProps) {
    return { searchRequest: props.searchRequest };
  }

  componentDidMount(): void {
    // this.getCards();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(prevProps: Readonly<MainProps>, _prevState: Readonly<MainState>): void {
    if (prevProps.searchRequest !== this.props.searchRequest) {
      this.getCards();
    }
  }

  getCards(): void {
    const { searchRequest } = this.state;

    fetch(`${this.url}${searchRequest}`)
      .then((res) => res.json())
      .then((people) => {
        this.setState(() => {
          return { searchResult: people };
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    const { searchResult } = this.state;
    const { results } = searchResult;

    return (
      <>
        <main className="main">
          {results.map((person) => (
            <Card person={person} key={person.url} />
          ))}
        </main>
      </>
    );
  }
}
