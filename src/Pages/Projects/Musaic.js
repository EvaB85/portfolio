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
        <h2>The Musaic App allows users to create Spotify playlists from their current mood. Current mood is represented by an image which the user uploads. You can edit, save, or share your playlists which have been created through the Spotify application. </h2>
      </div>
    )
  }
}

export default Musaic;
