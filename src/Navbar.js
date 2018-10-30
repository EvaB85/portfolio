import React from 'react';
import { Link } from 'react-router-dom';

//functional component/stateless component

const Navbar = (props) => {
  return (
    <div className='sidebar__navbar'>
      <ul>
        <li><Link to='/portfolio'>HOME</Link></li>
        <li><Link to='/portfolio/projects/repo-tracker'>PROJECTS</Link></li>
        <li><Link to='/portfolio/skills/coding'>SKILLS</Link></li>
        <li><Link to='/portfolio/contact'>CONTACT</Link></li>
        <li><a className='resume' href={require('./img/EB_RESUME.pdf')} target='_blank' rel='noopener noreferrer'>RESUME</a></li>
      </ul>
    </div>
  )
}

export default Navbar;
