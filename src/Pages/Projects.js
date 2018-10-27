import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FitnessTrails from './Projects/FitnessTrails';
import MonchProject from './Projects/MonchProject';
import Musaic from './Projects/Musaic';

//statefull Component
class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='projects'>
        <h1 className='project-title'>Projects</h1>
        <Route path='/projects/fitness-trails' component={FitnessTrails} />
        <Route path='/projects/musaic' component={Musaic} />
        <Route path='/projects/monch-project' component={MonchProject} />
      </div>
    )
  }
}

export default Projects;
