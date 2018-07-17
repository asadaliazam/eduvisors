import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Main from './main';


class Menu extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className = "Menu">

        <header className="header">

          <div className = "left-side">
            <img src={require('../styles/logo.svg')}/>
            | Eduvisors
          </div>

          <div className = "right-side">
            <nav>
              <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About</a></li>
                <li> <a href="#">Contact Us</a></li>
                <Router>
                <li><Link to="/HomeContent">Home</Link></li>
              </Router>
              </ul>
            </nav>
          </div>

          <div className = "username">
            <a href="#">Asad</a>
          </div>


        </header>

      </div>
    );
  }
}

export default Menu;
