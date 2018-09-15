import React, { Component } from 'react';
import { Route } from 'react-router-dom';


//statefull Component
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home;
