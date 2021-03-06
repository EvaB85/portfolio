import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

//statefull Component
class MainTop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main__top">
        <Route exact path="/portfolio" component={Home} />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/skills" component={Skills} />
        <Route path="/portfolio/contact" component={Contact} />
      </div>
    )
  }
}

export default MainTop;
