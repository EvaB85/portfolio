import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Coding from './Skills/Coding';
import Photography from './Skills/Photography';
import Art from './Skills/Art';

//statefull Component
class Skills extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='skills'>
        <h1>Skills</h1>
        <Route path="/skills/coding" component={Coding} />
        <Route path="/skills/photography" component={Photography} />
        <Route path="/skills/art" component={Art} />
      </div>
    )
  }
}

export default Skills;
