import React, { Component } from 'react';

class BottomBarContact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='contact-info'>
        <h1>Contact Me</h1>
        <div className='contact-info__links-box contact-info__links-box--outer'>
          <div className='contact-info__links-box contact-info__links-box--inner'>
            <a href="mailto:evabarrett23@gmail.com"><i className="fas fa-envelope icon-container__icons"></i>
              <span>email: evabarrett23@gmail.com</span>
            </a>
            <a href="https://github.com/EvaB85" target='_blank' rel="noopener noreferrer"><i className="fab fa-github icon-container__icons"></i>
              <span>https://github.com/EvaB85</span>
            </a>
          </div>
          <div className='contact-info__links-box contact-info__links-box--inner'>
            <a href="https://www.linkedin.com/in/evambarrett/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin icon-container__icons"></i>
              <span>https://www.linkedin.com/in/evambarrett/</span>
            </a>
            <a href="https://www.instagram.com/evaphotography4u/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram icon-container__icons"></i>
              <span>https://www.instagram.com/evaphotography4u/</span>
            </a>
          </div>
        </div>
        {/* <p><a href="https://www.instagram.com/aveefashion5/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram icon-container__icons"></i></a>  https://www.instagram.com/aveefashion5/</p> */}
      </div>
    )
  }
}

export default BottomBarContact;
