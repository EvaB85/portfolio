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
        <h2>RepoTracker gives users the ability to track their time spent on their coding repositories. Be able to monitor while you study, work on projects, or just for fun.  </h2>
      </div>
    )
  }
}

export default RepoTracker;