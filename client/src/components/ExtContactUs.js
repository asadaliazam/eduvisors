import React, { Component } from 'react';
import TeamPic from'./img/contactUs.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LoginMenu from './LoginMenu';
import Footer from './Footer';
import ContactUs from './ContactUs.js';

class ExtContactUs extends Component {

  render() {
    return (
      <div className="External">
          <LoginMenu />
          <ContactUs />
          <Footer />
      </div>
    );
  }
}

export default ExtContactUs;
