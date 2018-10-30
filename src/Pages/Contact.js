import React, { Component } from 'react';


//statefull Component
class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='contact'>
        <h1>Thank you for visiting my page.
          If you would like to work together
          or connect, feel free to contact me
          through any media outlet.
        </h1>
      </div>
    )
  }
}

export default Contact;
