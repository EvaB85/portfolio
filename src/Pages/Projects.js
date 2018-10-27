import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RepoTracker from './Projects/RepoTracker';
import Musaic from './Projects/Musaic';
import FitnessTrails from './Projects/FitnessTrails';
import MonchProject from './Projects/MonchProject';

//statefull Component
class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.location);
    const nameMap = {
      '/projects/repo-tracker': 'Repo Tracker',
      '/projects/fitness-trails': 'Fitness Trails',
      '/projects/musaic': 'Musaic',
      '/projects/monch-project': 'Monch Monch Monch'
    };
    return (
      <div className='projects'>
        <h1 className='project-title'>{nameMap[this.props.location.pathname]}</h1>
        <Route path='/projects/repo-tracker' component={RepoTracker} />
        <Route path='/projects/fitness-trails' component={FitnessTrails} />
        <Route path='/projects/musaic' component={Musaic} />
        <Route path='/projects/monch-project' component={MonchProject} />
      </div>
    )
  }
}

export default Projects;
