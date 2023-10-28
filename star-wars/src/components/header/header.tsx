import { Component } from 'react';

import './header.scss';
import { Search } from '../search/search';

export interface HeaderProps {
  value?: string;
}

interface HeaderState {
  value?: string;
}

export class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  render() {
    return (
      <>
        <header className="header">
          <Search/>
        </header>
      </>
    );
  }
}
