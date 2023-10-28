import { Component } from 'react';
import { Person, SwapiURL } from '../../model';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';

export interface MainProps {
  // searchResult?: Person[];
}

export interface MainState {
  searchRequest: string;
  searchResult: Person[];
}

export class Main extends Component<MainProps, MainState> {
  state = {
    searchRequest: '',
    searchResult: [],
  };

  private readonly searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;

  private readonly url  = `${SwapiURL.people}?search=`

  componentDidMount(): void {
    const searchRequest = localStorage.getItem(this.searchKey) || '';
    this.setState({ searchRequest });
  }

  componentWillUnmount(): void {
    const { searchRequest } = this.state;
    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, searchRequest);
  }

  getCards() {
    const { searchRequest } = this.state;
    fetch(`${this.url}${searchRequest}`)
      .then((res) => res.json())
      .then((people) => this.setState({searchResult: people.results}))
      .then(() => console.log(searchRequest))
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <>
        <main>Cards</main>
      </>
    );
  }
}
