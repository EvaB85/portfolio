import React, { Component } from 'react';

class Photography extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='photography-page'>
        <h1>Photography</h1>
        <p>I enjoy taking photographs of landscape and architecture.</p>
        <div className='photo-wrap'>
          <div className='photo-wrap__inner-border'>
            <i className="arrow2 arrow2--left fas fa-chevron-left"></i>
            <i className="arrow2 arrow2--right fas fa-chevron-right"></i>
            <div className='photo-box'>
              <img className='photo' src='../../img/Photography/bigtree.jpg' alt='bigtree'></img>
              <img className='photo' src='../../img/Photography/nords.jpg' alt='nordstroms'></img>
              <img className='photo' src='../../img/Photography/spaceneedle.jpg' alt='spaceneedle'></img>
              <img className='photo' src='../../img/Photography/subway.jpg' alt='subway'></img>
              <img className='photo' src='../../img/Photography/sunset.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/waterworks.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/mopop.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/blackwhite.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/pano.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/butterfly.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/canadaus.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/leaves.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/light.jpg' alt='name of photo'></img>
              <img className='photo' src='../../img/Photography/mountain.jpg' alt='mountains'></img>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default Photography;
