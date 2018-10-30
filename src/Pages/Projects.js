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
      '/portfolio/projects/repo-tracker': 'RepoTracker',
      '/portfolio/projects/musaic': 'Musaic',
      '/portfolio/projects/fitness-trails': 'Fitness Trails',
      '/portfolio/projects/monch-project': 'Monch-Monch-Monch'
    }
    return (
      <div className='projects'>
        <h1 className='project-title'>{projectsNameMap[this.props.location.pathname]}</h1>
        <Route path='/portfolio/projects/repo-tracker' component={RepoTracker} />
        <Route path='/portfolio/projects/fitness-trails' component={FitnessTrails} />
        <Route path='/portfolio/projects/musaic' component={Musaic} />
        <Route path='/portfolio/projects/monch-project' component={MonchProject} />
      </div>
    )
  }
}

export default Projects;
