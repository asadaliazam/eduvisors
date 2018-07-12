import React, { Component } from 'react';
import '../styles/engine.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

// import SchoolProfile from './schoolProfile';
import SchoolProf from './schoolProf';

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
                  {this.state.schoolNames.map(schoolName =>
                    <li key={schoolName.toString()}> {schoolName.institutionName} - {schoolName.province} - {schoolName.calculatedScore} - {schoolName.actualScore}
                    <Link to={'/schoolProf/'+schoolName.schoolID}>Link to institute page</Link></li>
                  )}
              </ul>
        </Router>


      </div>
    );
  }
}

export default Engine;
// <Route path="/schoolProfile/:institutionName" component={SchoolProfile} />
