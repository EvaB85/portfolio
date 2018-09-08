import React from 'react';
//functional component/stateless component

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1>EBDESIGN</h1>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;
