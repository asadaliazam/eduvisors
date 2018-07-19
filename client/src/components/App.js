import React, { Component } from 'react';
import logo from '../logo.png';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
//
// library.add(faStroopwafel)
//
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
    // export const Food = () => (
    //   <div>
    //     Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
    //   </div>
    // )
  render() {
    return (
      <div className="App">

      <Router>

          <div className="main-content">

            <MainContent />

            <form onSubmit={this.handleSubmit}>
              <label>
                CANADA:

                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="BC">BC </option>
                  <option value="AB">AB</option>
                  <option value="NL">NL</option>
                  <option value="MB">MB</option>
                </select>
              </label>
            </form>
            {/* <Label>
              <FontAwesomeIcon
                icon="envelope"
               color="#6DB65B"
              />
              Usernname
            </Label> */}
            <div class="information">
              <ul>
                {/* <li></li><i class="fas fa-university" style="font-size:60px;color:red;"></i> */}
                <li>100</li>
                <li>360,000,000</li>
                <li>2,000,000</li>
              </ul>
            </div>

          </div>
       </Router>
      </div>
    );
  }
}

export default App;
