import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Skills from './Pages/Skills';
import Home from './Pages/Home';

//statefull Component
class MainTop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main__top">
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
      </div>
    )
  }
}

export default MainTop;
