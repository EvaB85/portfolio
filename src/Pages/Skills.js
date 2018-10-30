import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Coding from './Skills/Coding';
import Photography from './Skills/Photography';
import Hobbies from './Skills/Hobbies';

//statefull Component
class Skills extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='skills'>
        <Route path="/portfolio/skills/coding" component={Coding} />
        <Route path="/portfolio/skills/photography" component={Photography} />
        <Route path="/portfolio/skills/hobbies" component={Hobbies} />
      </div>
    )
  }
}

export default Skills;
