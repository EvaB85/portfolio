import React from 'react';
import { Link } from 'react-router-dom';

//functional component/stateless component

const Navbar = (props) => {
  return (
    <div className="sidebar__navbar">
      <h1>EBDESIGN</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects/moodsic">Projects</Link></li>
        <li><Link to="/skills/coding">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <a class="resume" href='img/EB_RESUME.pdf' target='_blank' rel="noopener noreferrer">Resume</a>
      </ul>
    </div>
  )
}

export default Navbar;
