import React, { Component } from 'react';
import ContactUsPic from'./img/contactUsPic.jpg';
// import teamMember1 from'./img/teamMember1.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GoogleMapComponent from './GoogleMapComponent.js';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className="contactUsPage">
        <img src={ContactUsPic} alt="Contact Page"/>

        <h2> Help Us Get Better </h2>
        <div className="contactUsFormWrapper">
      <form className="contactUsForm">
      <div className="section">
        <TextField
          id="name"
          label="Name"
          type="text"
          margin="normal"
        />
      </div>
      <div className="section">
        <TextField
          id="email"
          label="Email"
          type="text"
          margin="normal"
        />
      </div>
      <div className="section">
        <TextField
          id="message"
          label="Message"
          multiline
          rowsMax="4"
          margin="normal"
        />
      </div>
      <Button  type="submit" variant="contained" color="primary" className="surveyButton">Submit</Button>
      </form>
    </div>
    <h2> Our Location </h2>
      <GoogleMapComponent />
      </div>


    );
  }
}

export default ContactUs;
