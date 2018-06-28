import React, { Component } from 'react';
import '../styles/engine.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import SchoolProfile from './schoolProfile';

class Engine extends Component {
  constructor() {
    super();
    this.state = {
      schoolNames: [],
      testvalue: 233
    };
  }

  componentDidMount() {
    fetch('/api/rankings')
      .then(res => res.json())
      .then(schoolNames => this.setState({schoolNames}, () => console.log('SchoolNames fetched...', schoolNames)));
  }

  render() {
    return (
      <div className = "score">
        <h2>Score</h2>
        <Router>
        <ul>
        {this.state.schoolNames.map(schoolNames =>
          <li> {schoolNames.institutionName} - {schoolNames.province} - {schoolNames.calculatedScore} - {schoolNames.actualScore}
          <Link to={'/schoolProfile/'+schoolNames.institutionName}>Link to institute page</Link></li>
        )}
          <Route path="/schoolProfile/:institutionName" component={SchoolProfile} />
        </ul>

          </Router>


      </div>
    );
  }
}

export default Engine;
