import React, { Component } from 'react';

class Coding extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="skills__icon-wrapper">
        <i className="fab fa-react"></i>
        <i className="fab fa-js-square"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-sass"></i>
        <i className="fab fa-python"></i>
      </div>
    )
  }
}

export default Coding;
