import React, { Component } from 'react';

class Coding extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Top Technologies</h1>
        <div className='skills__icon-wrapper'>
          <i className='tech-skills fab fa-react'></i>
          <i className='tech-skills fab fa-js-square'></i>
          <i className='tech-skills fab fa-css3-alt'></i>
          <i className='tech-skills fab fa-html5'></i>
          <i className='tech-skills fab fa-sass'></i>
        </div>
        <div className='icon-names'>
          <p className='tech-skills'>REACT</p>
          <p className='tech-skills'>JavaScript</p>
          <p className='tech-skills'>CSS</p>
          <p className='tech-skills'>HTML</p>
          <p className='tech-skills'>Sass</p>
        </div>
        <p>
          I am a front end leaning web developer with strong skills in JavaScript, React,
          HTML, and CSS. Having exceptional interpersonal skills, I thrive in a team
          environment. My passion and creativity along with my keen eye for the
          visual aspect of a website creates user friendly applications.
        </p>
      </div>
    )
  }
}

export default Coding;
