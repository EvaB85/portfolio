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
        <h2>Fitness Trail is an application that allows users to store their favorite hiking/walking trails in the US.</h2>
      </div>
    )
  }
}

export default FitnessTrails;
