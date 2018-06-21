import React, { Component } from 'react';
import './snowfall.css';

class Snowfall extends Component {
  constructor() {
    super();
    this.state = {
      snowfall: []
    };
  }

  componentDidMount() {

    fetch('/api/snow')
      .then(res => res.json())
      .then(snowfall => this.setState({snowfall}));
  }

  render() {

    return (
      <div className="App">
        <h2>Snowfall</h2>
        <ul>
        {this.state.snowfall.map(snowpr =>
          <li key={snowpr.id}>{snowpr.province} - {snowpr.jan}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Snowfall;
