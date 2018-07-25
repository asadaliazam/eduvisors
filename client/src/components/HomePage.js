import React, { Component } from 'react';
import Menu from './Menu.js';
<<<<<<< HEAD
=======
// import Example from './Menu2.js';
>>>>>>> 57735f97ff7e7f1198d4a979588b5ff5072ffa43

import Profile from './profile.js';
import Footer from './Footer.js';
import HomeSwitch from './HomeSwitch.js';

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
    console.log(1111, showProfile);
  }

  render() {
    return (


      <div className="HomePage-Content">

              <Menu toggleProf={this.toggleProf}/>
              <div className={"Main-Content"+(this.state.showProfile ? '' : ' hideProfile')}>
                  <Profile />
                  <HomeSwitch match={this.props.match}/>
              </div>
              <Footer />

      </div>

    );
  }
}

export default HomePage;
