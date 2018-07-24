import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'



class LandingPage extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <Router>
<div>
  <ul>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>

  </ul>

  <Route path="/login" component={LoginForm} />
  <Route path="/register" component={RegisterForm} />
</div>
</Router>
    );
  }
}

export default LandingPage;
