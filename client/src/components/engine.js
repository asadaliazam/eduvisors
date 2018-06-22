import React, { Component } from 'react';
import '../styles/engine.css';

class Engine extends Component {
  constructor() {
    super();
    this.state = {
      schoolNames: []
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
        <ul>
        {this.state.schoolNames.map(schoolNames =>
          <li> {schoolNames.institutionName} - {schoolNames.province} - {schoolNames.calculatedScore}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Engine;
