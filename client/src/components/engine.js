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
              <table>
                <tr>
                  <th>Name</th>
                  <th>Province</th>
                  <th>Calculated</th>
                  <th>Actual</th>
                  <th>WebSite</th>
                </tr>
                  {this.state.schoolNames.map(schoolName =>
                    <tr key={schoolName.toString()}> <td>{schoolName.institutionName}</td> <td>{schoolName.province}</td> <td>{schoolName.calculatedScore}</td> <td>{schoolName.actualScore}</td>
                    <td><Link to={'/schoolProf/'+schoolName.schoolID}>click here</Link></td>
                    </tr>
                  )}
              </table>
      </div>
    );
  }
}

export default Engine;
// <Route path="/schoolProfile/:institutionName" component={SchoolProfile} />
