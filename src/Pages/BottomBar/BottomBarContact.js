import React, { Component } from 'react';

class BottomBarContact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <div className='contact-info'>
        <h1>Contact Me:</h1>
        <p><a href="https://www.instagram.com/evaphotography4u/" target='_blank' rel="noopener noreferrer"><i className="fas fa-envelope icon-container__icons"></i></a>  email: evabarrett23@gmail.com</p>
        <p><a href="https://github.com/EvaB85" target='_blank' rel="noopener noreferrer"><i className="fab fa-github icon-container__icons"></i></a>  https://github.com/EvaB85</p>
        <p><a href="https://www.linkedin.com/in/evambarrett/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin icon-container__icons"></i></a>  https://www.linkedin.com/in/evambarrett/</p>
        <p><a href="https://www.instagram.com/evaphotography4u/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram icon-container__icons"></i></a>  https://www.instagram.com/evaphotography4u/</p>
        <p><a href="https://www.instagram.com/aveefashion5/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram icon-container__icons"></i></a>  https://www.instagram.com/aveefashion5/</p>
      </div>
    </div>
    )
  }
}

export default BottomBarContact;
