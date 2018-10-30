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
        <Route exact path="/" component={BottomBarHome} />
        <Route path="/projects" component={BottomBarProjects} />
        <Route path="/skills" component={BottomBarSkills} />
        <Route path="/contact" component={BottomBarContact} />
      </div>
    )
  }
}

export default MainBottom;
