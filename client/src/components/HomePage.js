import React, { Component } from 'react';
import Menu from './Menu.js';
import Profile from './profile.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';
import { BrowserRouter as Router} from 'react-router-dom'


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
              <div className = "Main-Menu">
                    <Menu/>
              </div>
              <div className = "Main-Content">

                    <div className = "Side-Bar">
                          <Profile/>
                    </div>

                    <div className = "Center-Page">
                          <MainContent/>
                    </div>
              </div>

              <Footer />

      </div>
      </Router>

    );
  }
}

export default HomePage;
