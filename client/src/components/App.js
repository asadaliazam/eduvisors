import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

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
<<<<<<< HEAD
import CostLiving from './cost_living';
import FieldStudy from './field_study';
import Selector from './selector';
=======
import Snowfall from './snowfall';
>>>>>>> e7910c2b384ff58d1c2d108033302a455bfb8805

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Router>
        <div className="container">
      <ul>
        <li><Link to="/chart">Chart</Link></li>
        <li><Link to="/cost">Cost</Link></li>
        <li><Link to="/engine">Engine</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/profileCompletion">ProfileCompletion</Link></li>
        <li><Link to="/schoolProfile">School Profile</Link></li>
<<<<<<< HEAD
        <li><Link to="/cost_living">Cost Living</Link></li>
        <li><Link to="/field_study">Field Study</Link></li>
        <li><Link to="/selector">Selector</Link></li>
=======
        <li><Link to="/snowfall">Snowfall</Link></li>
>>>>>>> e7910c2b384ff58d1c2d108033302a455bfb8805
      </ul>
        <hr/>
        <Route path="/chart" component={Chart} />
        <Route path="/cost" component={Costs} />
        <Route path="/engine" component={Engine} />
        <Route path="/form" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/profileCompletion" component={ProfileCompletion} />
        <Route path="/schoolProfile" component={SchoolProfile} />
<<<<<<< HEAD
        <Route path="/cost_living" component={CostLiving} />
        <Route path="/selector" component={Selector} />
=======
        <Route path="/snowfall" component={Snowfall} />
>>>>>>> e7910c2b384ff58d1c2d108033302a455bfb8805
    </div>
    </Router>
      </div>
    );
  }
}

export default App;
