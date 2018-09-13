import React, { Component } from 'react';
import MainTop from './MainTop';
import MainBottom from './MainBottom';

//statefull Component
class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main">
        <MainTop />
        <MainBottom />
      </div>
    )
  }
}

export default Main;
