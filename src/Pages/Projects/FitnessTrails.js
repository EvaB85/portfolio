import React, { Component } from 'react';

class FitnessTrails extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <a className='live-site-link' href='https://fitness-trails.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Live Site</a>
        <a className='github-site-link' href='https://github.com/EvaB85/fitness-trails' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <div className='project-box'>
          <h2>Description:</h2>
          <p>This application connects with the REI API to search through
            nearby trails. Using FitnessTrails application you can store
            your favorite trails under your own personalized profile. </p>
          <h2>Technologies Used To Build App:</h2>
          <p>HTML, CSS, JavaScript, Sequel, Express, EJS, Postgres</p>
        </div>
      </div>
    )
  }
}

export default FitnessTrails;
