import React, { Component } from 'react';
import logo from '../logo.png';
//import '../styles/App.css';
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import HeaderMenu from './header';
import MainContent from './main';


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
            </form>

            
          </div>
       </Router>
      </div>
    );
  }
}

export default App;
