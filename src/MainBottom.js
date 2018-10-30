import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BottomBarHome from './Pages/BottomBar/BottomBarHome';
import BottomBarProjects from './Pages/BottomBar/BottomBarProjects';
import BottomBarSkills from './Pages/BottomBar/BottomBarSkills';
import BottomBarContact from './Pages/BottomBar/BottomBarContact';

//statefull Component
class MainBottom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main__bottom">
        <Route exact path="/portfolio" component={BottomBarHome} />
        <Route path="/portfolio/projects" component={BottomBarProjects} />
        <Route path="/portfolio/skills" component={BottomBarSkills} />
        <Route path="/portfolio/contact" component={BottomBarContact} />
      </div>
    )
  }
}

export default MainBottom;
