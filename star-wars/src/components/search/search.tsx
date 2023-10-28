import { ChangeEvent, Component, FormEvent } from 'react';
import { Person } from '../../model';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Button } from '../button/button';

export interface SearchProps {
  searchResult?: Person[];
}
export interface SearchState {
  searchRequest: string;
}

export class Search extends Component<SearchProps, SearchState> {
  state = {
    searchRequest: '',
  };

  private readonly searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;

  componentDidMount(): void {
    const searchRequest = localStorage.getItem(this.searchKey);
    if (!searchRequest) return;
    this.setState({ searchRequest });
  }

  componentWillUnmount(): void {
    const { searchRequest } = this.state;
    if (!searchRequest) return;
    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, searchRequest);
  }

  onSubmit(e: FormEvent) {
    e.preventDefault();
    const { searchRequest } = this.state;
    if (!searchRequest) return;
    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, searchRequest);
  }

  onInput(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchRequest: e.target.value });
  }

  render() {
    const { searchRequest } = this.state;
    return (
      <>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" onChange={(e) => this.onInput(e)} value={searchRequest} />
          <Button title="Search" type="submit" />
        </form>
      </>
    );
  }
}
