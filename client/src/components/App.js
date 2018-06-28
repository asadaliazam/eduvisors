import React, { Component } from 'react';
import logo from '../logo.png';
import '../styles/App.css';

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
  render() {
    return (
      <div className="App">
      <Router>
          <div>
            <HeaderMenu />
            <MainContent />
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
