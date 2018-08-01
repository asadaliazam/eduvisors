import React, { Component } from 'react';
import TeamPic from'./img/contactUs.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GoogleMapComponent from './GoogleMapComponent.js';
import LoginMenu from './LoginMenu';
import Footer from './Footer';

class ExtContactUs extends Component {

  render() {
    return (
      <div className="External">
      <LoginMenu />
      <div className="contactUsPage">

        <div className="contactUsFrame">
          <h2> Reach out! We are here for you. </h2>
            <img src={TeamPic} alt="Team Eduvisors" />

            <div className="contactUsFormWrapper">

                  <form className="contactUsForm" action="/">
                  <div className="section">
                    <TextField
                      id="name"
                      label="Name"
                      type="text"
                      margin="normal"
                      className="TxtField"
                    />
                  </div>
                  <div className="section">
                    <TextField
                      id="email"
                      label="Email"
                      type="text"
                      margin="normal"
                      className="TxtField"
                    />
                  </div>
                  <div className="section">
                    <TextField
                      id="message"
                      label="Message"
                      multiline
                      rowsMax="4"
                      margin="normal"
                      className="TxtField"
                    />
                  </div>
                  <Button  type="submit" variant="contained" color="primary" className="surveyButton">Submit</Button>
                  </form>
              </div>
          </div>
      </div>

      <Footer />
      </div>
    );
  }
}

export default ExtContactUs;
