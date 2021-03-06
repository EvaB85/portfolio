import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//stateful component

class BottomBarProjects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='bottom-bar-projects--outer'>
        <div className="bottom-bar-projects">
          <Link className="projects-box projects-box--repo-tracker" to="/portfolio/projects/repo-tracker">
            <p>RepoTracker</p>
          </Link>
          <Link className="projects-box projects-box--musaic" to="/portfolio/projects/musaic">
            <p>Musaic</p>
          </Link>
          <Link className="projects-box projects-box--fitness-trails" to="/portfolio/projects/fitness-trails">
            <p>Fitness Trails</p>
          </Link>
          <Link className="projects-box projects-box--monch" to="/portfolio/projects/monch-project">
            <p>MONCH! MONCH! MONCH!</p>
          </Link>
        </div>
        <i className="arrow arrow--left fas fa-chevron-left"></i>
        <i className="arrow arrow--right fas fa-chevron-right"></i>
      </div>
    )
  }
};

export default BottomBarProjects;
