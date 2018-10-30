import React, { Component } from 'react';

class RepoTracker extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <a className='live-site-link' href='https://gitman.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Live Site</a>
        <a className='github-site-link' href='https://github.com/carverme/project_four2' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <div className='project-box'>
          <h2>Description:</h2>
          <p>Incorporating the GitHub API, RepoTracker application gives you a way to log and track the minutes spent on your repositories. </p>
          <h2>Technologies Used To Build App:</h2>
          <p>Node, Express, EJS, Postgres, JS, Materialize</p>
        </div>
      </div>
    )
  }
}

export default RepoTracker;
