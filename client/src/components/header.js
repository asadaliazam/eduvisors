import React, { Component } from 'react';
import logo from '../logo.png';
// import '../styles/header.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Costs from './cost';
import Profile from './profile';
import Engine from './engine';
import Chart from './chart';
import Register from './form';
import ProfileCompletion from './profileCompletion';
import SchoolProfile from './schoolProfile';
import CostLiving from './cost_living';
import FieldStudy from './field_study';
import Selector from './selector';
import Snowfall from './snowfall';
import '../styles/header.css';

class HeaderMenu extends Component {
  render() {
    return (
      <div className="menu">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Eduvisors</h1>
            <nav className="container">
                <ul>
                  <li><Link to="/chart">Chart</Link></li>
                  <li><Link to="/cost">Cost</Link></li>
                  <li><Link to="/engine">Engine</Link></li>
                  <li><Link to="/form">Form</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/profileCompletion">ProfileCompletion</Link></li>
                  <li><Link to="/schoolProfile">School Profile</Link></li>
                  <li><Link to="/cost_living">Cost Living</Link></li>
                  <li><Link to="/field_study">Field Study</Link></li>
                  <li><Link to="/selector">Selector</Link></li>
                  <li><Link to="/snowfall/BC/rain">Snowfall</Link></li>
                </ul>
            </nav>
          </header>
      </div>
    );
  }
}

export default HeaderMenu;
