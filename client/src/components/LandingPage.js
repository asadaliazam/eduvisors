import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch} from 'react-router';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Logo from'./img/logo1.svg';

import Landingimage from'./img/landing-header.jpg';
import Button from '@material-ui/core/Button';
import CostOfLivingGraph from './costOfLivingGraph';

import Footer from './Footer.js';



class LandingPage extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
          <div className="landingPage">
          <div className="landing-header">
          <div className="landing-logo">
          <img src={Logo} alt="Eduvisors logo"/>
          </div>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>

            </ul>

            </div>
              
            <div className="landing-image">
            <img src={Landingimage} alt="Landingimage header-image"/>
            </div>
            <div className="landing-info">
            <h3>Match making you with your high quality educational destination in Canada.</h3>
            </div>
            <div className="signup-video">
            <div className="signupButton">

           <Button  type="submit" variant="contained" color="primary" className="signupButton">
             <Link to="/HomePage/signup">Signup</Link>
           </Button>
         </div>
         <div className="videoButton">

        <Button  type="submit" variant="contained" color="primary" className="signupButton">
          <Link to="https://www.powtoon.com/embed/dJBuv5ExsKU/">Watch Video</Link>
        </Button>
      </div>
      </div>
            <div className="landing-chart1">
                     <CostOfLivingGraph province='BC' />
                   </div>
                   <div className="landing-features">
                   <div className="feature-1 features"><span>Feature 1</span><h3>About feature</h3></div>
                   <div className="feature-2 features"><span>Feature 2</span><h3>About feature</h3></div>
                   <div className="feature-3 features"><span>Feature 3</span><h3>About feature</h3></div>
                   <div className="landing-chart2">
                            <CostOfLivingGraph province='BC' />
                          </div>

                   </div>
<Footer />          </div>
    );
  }
}

export default LandingPage;
