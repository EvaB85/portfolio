import React from 'react';

const SidebarFooter = (props) => {
  return (
    <div className="sidebar__footer">
      <div className="icon-container">
        <a href="https://www.instagram.com/evaphotography4u/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram icon-container__icons"></i></a>
        <a href="https://github.com/EvaB85" target='_blank' rel="noopener noreferrer"><i className="fab fa-github icon-container__icons"></i></a>
        <a href="https://www.linkedin.com/in/evambarrett/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin icon-container__icons"></i></a>
      </div>
    </div>
  )
}

export default SidebarFooter;
