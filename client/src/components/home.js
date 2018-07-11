import React, { Component } from 'react';
// import '../styles/Home.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Snowfall from './snowfall';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {value:"BC"};
      this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
      this.setState({value: event.target.value});
      }

    render() {
      return (
      <div className="Home">
          <Router>
              <div className="main-content">

                      <form onSubmit={this.handleSubmit}>
                          <label>
                            Pick a Province from our list:
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="BC">BC </option>
                                    <option value="AB">AB</option>
                                    <option value="NL">NL</option>
                                    <option value="MB">MB</option>
                                </select>
                          </label>
                      </form>

                      <div className = "charts">
                            <div>
                                <p> {this.state.value} </p>
                                <Snowfall province={this.state.value} type={'snow'} />
                            </div>

                            <div>
                                <Snowfall province={this.state.value} type={'rain'} />
                            </div>

                            <div>
                                <Snowfall province={this.state.value} type={'temp_low'} />
                            </div>

                            <div>
                                <Snowfall province={this.state.value} type={'temp_high'} />
                            </div>

                            <div>
                                <Snowfall province={this.state.value} type={'temp_avg'} />
                            </div>
                      </div>  // end of CHARTS
              </div>  // end of MAIN-CONTENT
          </Router>
      </div>  // end of HomePage

    );}  // end of RENDER

}  // end of CLASS

export default Home;
