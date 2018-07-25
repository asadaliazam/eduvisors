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
        showProfile: true
    };
    this.toggleProf = this.toggleProf.bind(this)

  }

  toggleProf = () => {
    const {showProfile} = this.state;
    this.setState({ showProfile: !showProfile});
    console.log(showProfile);
  }

  render() {
    return (


      <div className="HomePage-Content">

              <Menu toggleDiv={this.toggleProf}/>
              <div className={"Main-Content"+(this.state.showProfile ? '' : ' hideProfile')}>
                  <Profile />
                  <MainContent/>
              </div>
              <Footer />

      </div>

    );
  }
}

export default HomePage;
