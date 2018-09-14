import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BottomBarSkills from './Pages/BottomBar/BottomBarSkills';

//statefull Component
class MainBottom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main__bottom">
        <Route path="/skills" component={BottomBarSkills} />
      </div>
    )
  }
}

export default MainBottom;
