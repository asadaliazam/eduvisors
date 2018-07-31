import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Menu from './Menutwo.js';
import Landingimage from'./img/landing-header.jpg';
import Button from '@material-ui/core/Button';
import CostOfLivingGraph from './costOfLivingGraph';
import SnowFall from './snowfall';
import Feature1 from'./img/like.svg';
import Feature2 from'./img/lock.svg';
import Feature3 from'./img/map.svg';
// import Partbg from'./img/partbg.jpg';
import Footer from './Footer.js';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';




class LandingPage extends Component {

  render() {
    return (

    <div className="landingPage">

          <div className="landing-header">
                <Menu toggleProf={this.toggleProf} />
          </div>

          <div className="landing-image">
                <img src={Landingimage} alt="Landingimage header"/>
                <div className="landing-info">
                    <h3>Match making you with your high quality educational destination in Canada.</h3>
                </div>
          </div>

          <div className="contentBody">
                <div className="signup-video">
                      <div className="signupButton">
                            <Button  type="submit" variant="contained" color="primary" className="signupButton">
                                    <Link to="/register">Signup</Link>
                            </Button>
                      </div>

                      <div className="videoButton">
                            <Button  type="submit" variant="contained" color="primary" className="signupButton">
                                    <Link to="https://www.powtoon.com/embed/dJBuv5ExsKU/">Watch Video</Link>
                            </Button>
                      </div>
                </div>

                <div className="landing-chart1">
                      <SnowFall province='BC' type='rain' />
                </div>
                         {/* <div className="bg-img"> */}
                           {/* <img src={Partbg} alt="partbg"/> */}
                <div className="landing-features">
                       <div className="feature-set">
                              <div className="feature-1 features">
                                    <img src={Feature1} alt="Feature1"/>
                                    <h3>Eduvisors Engine</h3>
                                    <p>In the heart of the App is Eduvisors’ engine that calculates recommendations to all users.</p>
                              </div>
                              <div className="feature-2 features">
                                    <img src={Feature2} alt="Feature2"/>
                                    <h3>Secured Personal Data</h3>
                                    <p>Eduvisors have implemented protocols and technology to secure all personal data.</p>
                              </div>
                              <div className="feature-3 features">
                                    <img src={Feature3} alt="Feature3"/>
                                    <h3>Province & School Specific Details</h3>
                                    <p>Access to information about the schools and provinces to support your decision process.</p>
                              </div>
                       </div>

                       <div className="landing-chart2">
                              <CostOfLivingGraph province='BC' />
                      </div>
                              {/* </div> */}
                 </div>

                   </div>
                   {/* <div className="team">
                   <ul>
                   <li><img src={Feature2} alt="Feature2"/><h3>Secured Personal Data</h3></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   </ul>
                   </div> */}

<Footer />
</div>
    );
  }
}

export default LandingPage;
