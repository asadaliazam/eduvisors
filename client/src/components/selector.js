import React, { Component } from 'react';
class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="BC">Grapefruit </option>
            <option value="MB">Lime</option>
            <option value="NL">Coconut</option>
            <option value="SK">Mango</option>
          </select>
        </label>
        <p> {this.state.value} </p>
      </form>

    );
  }
}


export default Selector;
