import { ChangeEvent, Component, FormEvent } from 'react';
import { Callback } from '../../model';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Button } from '../button/button';

export interface SearchProps {
  updateSearchRequest: Callback<string>;
}
export interface SearchState {
  searchRequest: string;
}

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchRequest: this.getSearchValue(),
    };
    this.props.updateSearchRequest(this.state.searchRequest);
  }

  private readonly searchKey = `${STORAGE_KEY_PREFFIX}_searchRequest`;

  getSearchValue(): string {
    return localStorage.getItem(this.searchKey) || '';
  }

  onSubmit(e: FormEvent) {
    e.preventDefault();
    const { searchRequest } = this.state;

    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, searchRequest || '');
    this.props.updateSearchRequest(searchRequest);
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
