import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch} from 'react-router';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Logo from'./img/logo1.svg';

import Landingimage from'./img/landing-header.jpg';
import Button from '@material-ui/core/Button';
import CostOfLivingGraph from './costOfLivingGraph';






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
            <div className="signupButton">
           <p>Sign Up</p>
           <Button  type="submit" variant="contained" color="primary" className="signupButton">
             <Link to="/HomePage/signup">Sign up</Link>
           </Button>
         </div>
            </div>
            <div className="landing-image">
            <img src={Landingimage} alt="Landingimage header-image"/>
            </div>
            <div>
                     <CostOfLivingGraph province='BC' />
                   </div>

          </div>
    );
  }
}

export default LandingPage;
