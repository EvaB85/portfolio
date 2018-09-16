import React, { Component } from 'react';
import { Route } from 'react-router-dom';


//statefull Component
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home-page-text">
        <h1>Eva Barrett</h1>
        <h2>Web Developer</h2>
      </div>
    )
  }
}

export default Home;
