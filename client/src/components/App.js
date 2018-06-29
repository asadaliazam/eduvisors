import React, { Component } from 'react';
import logo from '../logo.png';
//import '../styles/App.css';
import '../styles/App2.css';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import HeaderMenu from './header';
import MainContent from './main';
import Snowfall from './snowfall';

class App extends Component {
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
      <div className="App">

<Router>
          <div className="main-content">

            <HeaderMenu />
            <MainContent />
            <form onSubmit={this.handleSubmit}>
              <label>
                Pick your favorite La Croix flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="BC">BC </option>
                  <option value="AB">AB</option>
                  <option value="NL">NL</option>
                  <option value="MB">MB</option>
                </select>
              </label>
              <p> {this.state.value} </p>
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
            

            </div>
            <p> {this.state.value} </p>

          </div>
</Router>
      </div>
    );
  }
}

export default App;
