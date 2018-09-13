import React, { Component } from 'react';
import Navbar from './Navbar';
import SidebarFooter from './SidebarFooter';

//statefull Component
class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sidebar">
        <Navbar />
        <SidebarFooter />
      </div>
    )
  }
}

export default Sidebar;
