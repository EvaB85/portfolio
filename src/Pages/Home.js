import React, { Component } from 'react';
import { Route } from 'react-router-dom';


//stateful Component
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home-page">
        <h1>Eva Barre<span>t</span>t</h1>
        <h3>Web Developer</h3>
      </div>
    )
  }
}

export default Home;
