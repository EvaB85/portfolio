import React, { Component } from 'react';

class Photography extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Photography</h1>
        <p>I enjoy taking landscape and architecture photographs. </p>
        <div className='photo-box'>
          <img className='photo' src='../img/Photography/blackwhite.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/butterfly.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/canadaus.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/leaves.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/light.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/mountain.jpg' alt='mountains'></img>
          <img className='photo' src='../img/Photography/nords.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/spaceneedle.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/spaceneedle2.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/subway.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/sunset.jpg' alt='name of photo'></img>
          <img className='photo' src='../img/Photography/waterworks.jpg' alt='name of photo'></img>
        </div>

        {/* PANORAMAS */}
        {/* <img className='photo' src='../img/Photography/bigtree.jpg' alt='name of photo'></img>
        <img className='photo' src='../img/Photography/pano.jpg' alt='name of photo'></img>
        <img className='photo' src='../img/Photography/pano2.jpg' alt='name of photo'></img>
        <img className='photo' src='../img/Photography/pano3.jpg' alt='name of photo'></img>
        <img className='photo' src='../img/Photography/pano4.jpg' alt='name of photo'></img> */}
      </div>
    )
  }

}

export default Photography;
