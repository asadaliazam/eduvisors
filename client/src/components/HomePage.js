import React, { Component } from 'react';
// import MenuToggle from './MenuToggle.js';
import Menu from './Menu.js';

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


      <div className="HomePage">

              <Menu />
              <div className={"Main"+(this.state.showProfile ? '' : ' hideProfile')}>
                  <Profile />
                  <HomeSwitch match={this.props.match}/>
              </div>
              <Footer />

      </div>

    );
  }
}

export default HomePage;
