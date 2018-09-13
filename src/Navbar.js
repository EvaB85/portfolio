import React from 'react';
import { Link } from 'react-router-dom';

//functional component/stateless component

const Navbar = (props) => {
  return (
    <div className="sidebar__navbar">
      <h1>EBDESIGN</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
