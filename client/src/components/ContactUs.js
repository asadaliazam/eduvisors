import React, { Component } from 'react';
// import ContactUsPic from'./img/contactUsPic.jpg';
import TeamPic from'./img/contactUs.png';
// import teamMember1 from'./img/teamMember1.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import GoogleMapComponent from './GoogleMapComponent.js';
import teamMember1 from'./img/team/asad.jpeg';
import teamMember2 from'./img/team/nav.png';
import teamMember3 from'./img/team/rod2.png';
import teamMember4 from'./img/team/sam.png';
import teamMember5 from'./img/team/lak2.png';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className="contactUsPage">

        <div className="CardHeader">
          <p>Contact Us</p>
          <Link to="/HomePage/"><FontAwesomeIcon icon={faTimes} /></Link>
        </div>
        <div className="contactUsFrame">
          <h2> Reach out! We are here for you. </h2>
            <img src={TeamPic} alt="Team Eduvisors" />


            <div className="contactUsFormWrapper">

                  <form className="contactUsForm" action="/HomePage">
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
          {/* <div>
              <h2> Our Location </h2>
              <GoogleMapComponent />
          </div> */}

      </div>


    );
  }
}

export default ContactUs;
