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
          <Link className="projects-box projects-box--fitness-trails" to="/projects/fitness-trails">FITNESS TRAILS APP</Link>
          <Link className="projects-box projects-box--moodsic" to="/projects/moodsic">MOODSIC</Link>
          <Link className="projects-box projects-box--monch-project" to="/projects/monch-project">MONCH! MONCH! MONCH!</Link>
          {/* TESTING */}
          <Link className="projects-box projects-box--monch-project" to="/projects/monch-project">MONCH! MONCH! MONCH!</Link>
          <Link className="projects-box projects-box--monch-project" to="/projects/monch-project">MONCH! MONCH! MONCH!</Link>
        </div>
        <i className="arrow arrow--left fas fa-chevron-left"></i>
        <i className="arrow arrow--right fas fa-chevron-right"></i>
      </div>
    )
  }
};

export default BottomBarProjects;
