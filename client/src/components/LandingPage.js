import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch} from 'react-router';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';





class LandingPage extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
          <div>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
    );
  }
}

export default LandingPage;
