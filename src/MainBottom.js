import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BottomBarSkills from './Pages/BottomBar/BottomBarSkills';
import BottomBarHome from './Pages/BottomBar/BottomBarHome';

//statefull Component
class MainBottom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main__bottom">
        <Route exact path="/" component={BottomBarHome} />
        <Route path="/skills" component={BottomBarSkills} />
      </div>
    )
  }
}

export default MainBottom;
