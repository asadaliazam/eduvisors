import React, { Component } from 'react';
import Menu from './Menu.js';
import Profile from './profile.js';
import Footer from './Footer.js';
import HomeContent from './HomeContent.js';
import HomeSwitch from './HomeSwitch.js';
import {BrowserRouter as Router } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="HomePage-Content">
          <Menu/>
          <div className = "Main-Content">
            <Profile/>
            <HomeSwitch match={this.props.match} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default HomePage;
