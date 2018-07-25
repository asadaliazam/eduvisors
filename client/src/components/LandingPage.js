import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LandingPage extends Component {

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
