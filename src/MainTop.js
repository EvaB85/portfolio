import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Skills from './Pages/Skills';

//statefull Component
class MainTop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main__top">
        <h1>EVA BARRETT</h1>
        <h2>WEB DEVELOPER</h2>
        <Route path="/skills" component={Skills} />
      </div>
    )
  }
}

export default MainTop;
