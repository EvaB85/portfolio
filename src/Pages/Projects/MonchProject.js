import React, { Component } from 'react';

class MonchProject extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <a className='live-site-link' href='https://evab85.github.io/Monch-Monch-Monch/' target='_blank' rel='noopener noreferrer'>Live Site</a>
        <a className='github-site-link' href='https://github.com/EvaB85/Monch-Monch-Monch' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <div className='project-box'>
          <h2>Description:</h2>
          <p>This interactive, two-player game was designed for elementary kids and
            challenges you to grab as many cookies as you can in 30 seconds, improving
            your fine motor skills.
          </p>
          <h2>Technologies Used To Build App:</h2>
          <p>HTML, CSS, JavaScript, jQuery</p>
        </div>
      </div>
    )
  }
}

export default MonchProject;
