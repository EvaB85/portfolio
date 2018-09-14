import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//stateful component

class BottomBarSkills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bottom-bar-skills">
        <Link className="skills-box skills-box--coding" to="/skills/coding">CODING</Link>
        <Link className="skills-box skills-box--photography" to="/skills/photography">PHOTOGRAPHY</Link>
        <Link className="skills-box skills-box--art" to="/skills/art">ART</Link>
      </div>
    )
  }
};

export default BottomBarSkills;
