import React, { Component } from 'react';
import Menu from './Menu.js';
import Profile from './profile.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';



class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (


      <div className="HomePage-Content">

              <Menu/>
              <div className = "Main-Content">
                  <Profile/>
                  <MainContent/>
              </div>
              <Footer />

      </div>

    );
  }
}

export default HomePage;
