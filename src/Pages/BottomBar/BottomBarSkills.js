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
        <Link className="skills-box skills-box--coding" to="/portfolio/skills/coding">CODING</Link>
        <Link className="skills-box skills-box--photography" to="/portfolio/skills/photography">PHOTOGRAPHY</Link>
        <Link className="skills-box skills-box--hobbies" to="/portfolio/skills/hobbies">HOBBIES</Link>
      </div>
    )
  }
};

export default BottomBarSkills;
