import { Component } from 'react';

import './loader.scss';

export class Loader extends Component {
  render() {
    return (
      <>
        <div className="loader_container">
          <span className="loader"></span>
        </div>
      </>
    );
  }
}
