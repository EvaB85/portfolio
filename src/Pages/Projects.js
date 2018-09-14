import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FitnessTrails from './Projects/FitnessTrails';
import MonchProject from './Projects/MonchProject';
import Moodsic from './Projects/Moodsic';

//statefull Component
class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <Route path="/projects/fitness-trails" component={FitnessTrails} />
        <Route path="/projects/monch-project" component={MonchProject} />
        <Route path="/projects/moodsic" component={Moodsic} />
      </div>
    )
  }
}

export default Projects;
