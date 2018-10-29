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
        <div className='more-skills-box'>
          <div>
             <h2 className='more-skills'>Languages </h2>
            <ul>
              <li>JavaScript</li>
              <li>JSX</li>
              <li>EJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
            </ul>
          </div>
          <div>
             <h2 className='more-skills'>Frameworks </h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Django</li>
            </ul>
          </div>
          <div>
             <h2 className='more-skills'>Libraries </h2>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>jQuery</li>
              <li>Materialize</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
             <h2 className='more-skills'>Data </h2>
            <ul>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
          <div>
             <h2 className='more-skills'>Extra </h2>
            <ul>
              <li>RESTful</li>
              <li>APIs</li>
              <li>AJAX</li>
              <li>JSON</li>
              <li>Authentication</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Coding;
