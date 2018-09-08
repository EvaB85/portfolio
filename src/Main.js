import React, { Component } from 'react';
import './css/Main.css';
//statefull Component
class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main">
        <h1>This is main</h1>
      </div>
    )
  }
}

export default Main;
