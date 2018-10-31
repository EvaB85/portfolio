import React, { Component } from 'react';

class Musaic extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <a className='live-site-link' href='http://moodsic11.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Live Site</a>
        <a className='github-site-link' href='https://github.com/jayhatha/musaic' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <div className='project-box'>
          <h2>Description:</h2>
          <p>Upload a photo of your current mood to generate a Spotify playlist.</p>
          <h2>Technologies Used To Build App:</h2>
          <p>React, React Router, MongoDB, Mongoose, Axios, Node, Express,
            Chart.JS, Spotify API, Cloudinary API, JWT, bcrypt</p>
        </div>
      </div>
    )
  }
}

export default Musaic;
