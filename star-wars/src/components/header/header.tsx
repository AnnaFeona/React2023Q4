import { Component } from 'react';

import './header.scss';
import { Search } from '../search/search';
import { Callback } from '../../model';

export interface HeaderProps {
  updateSearchRequest: Callback<string>;
}

interface HeaderState {
  searchRequest: string;
}

export class Header extends Component<HeaderProps, HeaderState> {
  state = {
    searchRequest: '',
  };

  updateData(value: string | undefined) {
    if (!value) value = '';
    this.props.updateSearchRequest(value);
    this.setState({ searchRequest: value });
  }

  render() {
    return (
      <>
        <header className="header">
          <Search updateSearchRequest={(v) => this.updateData(v)} />
        </header>
      </>
    );
  }
}
