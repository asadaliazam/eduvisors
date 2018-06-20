import React, { Component } from 'react';
import './engine.css';

class Engine extends Component {
  constructor() {
    super();
    this.state = {
      total_score: 0

    };
  }

  componentDidMount() {
    fetch('/api/rankings')
      .then(res => res.json())
      .then(total_score => this.setState({total_score}, () => console.log('Score fetched...', total_score)));
  }

  render() {
    return (
      <div className = "score">
        <h2>Score</h2>
        <p> {this.state.total_score} </p>
      </div>
    );
  }
}

export default Engine;
