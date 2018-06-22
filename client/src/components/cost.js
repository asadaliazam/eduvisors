import React, { Component } from 'react';
import '../styles/cost.css';

class Costs extends Component {
  constructor() {
    super();
    this.state = {
      cost: []
    };
  }

  componentDidMount() {
    fetch('/api/costoftuition')
      .then(res => res.json())
      .then(cost => this.setState({cost}, () => console.log('Customers fetched...', cost)));
  }

  render() {
    return (
      <div>
        <h2>Cost of Education</h2>
        <ul>
        {this.state.cost.map(cost =>
          <li key={cost.id}>{cost.id} {cost.province} {cost.education}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Costs;
