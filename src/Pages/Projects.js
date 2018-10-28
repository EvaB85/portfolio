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
    console.log(this.props.location.pathname);
    const projectsNameMap = {
      '/projects/repo-tracker': 'RepoTracker',
      '/projects/musaic': 'Musaic',
      '/projects/fitness-trails': 'Fitness Trails',
      '/projects/monch-project': 'Monch-Monch-Monch'
    }
    return (
      <div className='projects'>
        <h1 className='project-title'>{projectsNameMap[this.props.location.pathname]}</h1>
        <Route path='/projects/repo-tracker' component={RepoTracker} />
        <Route path='/projects/fitness-trails' component={FitnessTrails} />
        <Route path='/projects/musaic' component={Musaic} />
        <Route path='/projects/monch-project' component={MonchProject} />
      </div>
    )
  }
}

export default Projects;
