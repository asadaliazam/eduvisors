import React, { Component } from 'react';
import teamMember1 from'./img/team/asad.jpeg';
import teamMember2 from'./img/team/nav.png';
import teamMember3 from'./img/team/rod2.png';
import teamMember4 from'./img/team/sam.png';
import teamMember5 from'./img/team/lak2.png';

import Card from '@material-ui/core/Card';
import LoginMenu from './LoginMenu';
import Footer from './Footer';
import AboutPage from './AboutPage';

class ExtAbout extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className="External">
            <LoginMenu />
            <AboutPage />
            <Footer />
      </div>

    );
  }
}

export default ExtAbout;
