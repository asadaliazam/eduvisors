import React, { Component } from 'react';
import '../styles/cost_living.css';

class CostLiving extends Component {
  constructor() {
    super();
    this.state = {
      cost_living: []
    };
  }

  componentDidMount() {
    fetch('/api/cost_living')
      .then(res => res.json())
      .then(cost_living => this.setState({cost_living}, () => console.log('Costs of living fetched...', cost_living)));
  }

  render() {
    return (
      <div>
        <h2>Cost_living</h2>
        <ul>
        {this.state.cost_living.map(cost_living =>
          <li key={cost_living.id}>{cost_living.province} {cost_living.food} {cost_living.house} {cost_living.house_operations} {cost_living.furniture} {cost_living.clothing} {cost_living.transport} {cost_living.health} {cost_living.personal_care} {cost_living.recreation} {cost_living.education} {cost_living.reading} {cost_living.tobacco_alcohol} {cost_living.games} {cost_living.miscellaneous} {cost_living.gifts}
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default CostLiving;
