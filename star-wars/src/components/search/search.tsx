import { Component, FormEvent } from 'react';
import { Callback } from '../../model';
import { STORAGE_KEY_PREFFIX } from '../../model/constants';
import { Button } from '../button/button';

import './search.scss';

export interface SearchProps {
  updateSearchRequest: Callback<string>;
}
export interface SearchState {
  searchRequest: string;
  hasError: boolean;
}

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchRequest: this.getSearchValue(),
      hasError: false,
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
    const dataToSave = this.transformInputValue(searchRequest);
    localStorage.setItem(`${STORAGE_KEY_PREFFIX}_searchRequest`, dataToSave);
    this.props.updateSearchRequest(dataToSave);
  }

  onInput(e: FormEvent) {
    const { value } = e.target as HTMLInputElement;

    this.setState({ searchRequest: value });
  }

  transformInputValue(val: string): string {
    return val
      .split(' ')
      .filter((item) => item.length > 0)
      .join(' ');
  }

  generateError() {
    throw new Error('Error boundary works!');
  }

  render() {
    const { searchRequest } = this.state;

    return (
      <>
        <form onSubmit={(e) => this.onSubmit(e)} className="header_form">
          <input
            className="search__input"
            type="text"
            onInput={(e) => this.onInput(e)}
            value={searchRequest}
            placeholder="What ars you looking for?"
          />
          <Button title="Search" type="submit" />
        </form>
      </>
    );
  }
}
