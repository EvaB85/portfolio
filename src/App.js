import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.min.css';
import Sidebar from './Sidebar';
import Main from './Main';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
