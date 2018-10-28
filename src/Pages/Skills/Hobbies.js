import React, { Component } from 'react';

class Hobbies extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hobbies</h1>
        <ul className='hobby-list'>
          <li className='hobby-list__right'>Drawing</li>
          <li className='hobby-list__left'>Photography</li>
          <li className='hobby-list__right'>Sewing</li>
          <li className='hobby-list__left'>Crossfit</li>
          <li className='hobby-list__right'>Hiking</li>
        </ul>
      </div>
    )
  }

}

export default Hobbies;
