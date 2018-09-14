import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Coding from './Skills/Coding';



//statefull Component
class Skills extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <Route path="/skills/coding" component={Coding} />
      </div>
    )
  }
}

export default Skills;
