import React from 'react';
import { Link } from 'react-router-dom';

//functional component/stateless component

const Navbar = (props) => {
  return (
    <div className="sidebar__navbar">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/projects/musaic">PROJECTS</Link></li>
        <li><Link to="/skills/coding">SKILLS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <a class="resume" href='img/EB_RESUME.pdf' target='_blank' rel="noopener noreferrer">RESUME</a>
      </ul>
    </div>
  )
}

export default Navbar;
