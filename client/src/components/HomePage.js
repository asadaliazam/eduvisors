import React, { Component } from 'react';
import Menu from './Menu.js';
import Profile from './profile.js';
import HomeContent from './HomeContent.js';


import '../styles/everything.css';
import '../sam.css';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className="HomePage-Content">
        <div className = "Main-Menu">
        <Menu/>
        </div>
        <div className = "Main-Content">

        <div className = "Side-Bar">
        <Profile/>
        </div>

        <div className = "Center-Page">
        <HomeContent/>
        </div>



        </div>
        <div className = "footer">
          <div className = "left-side">
            <ul>
              <li> <a href="#">Home</a></li>
              <li> <a href="#">About</a></li>
              <li> <a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className = "right-side">
            <ul>
              <li> <a href="#">Facebook</a></li>
              <li> <a href="#">Instagram</a></li>
              <li> <a href="#">G+</a></li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;
