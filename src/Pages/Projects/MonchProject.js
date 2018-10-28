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
        <h2>A fun and interactive, two-player game allows users to test their motor skills. Help cookie monster eat as many cookies as possible before the time runs out.</h2>
      </div>
    )
  }
}

export default MonchProject;
