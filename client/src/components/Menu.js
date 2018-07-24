import React, { Component } from 'react';
import Logo from'./logo.png';
import {Link} from 'react-router-dom'

class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className = "Menu">

        <header className="header">
              <div className = "left-side">
                {/* <img src={require('../styles/logo.svg')}/> */}
                <img src={Logo} alt="Eduvisors logo"/>
                | Eduvisors
              </div>

              <div className = "right-side">
                <nav>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                        <li><Link to="/HomeContent">Home</Link></li>
                        <li><Link to="/survey">Survey</Link></li>
                    </ul>
                </nav>
              </div>

              <div className = "username">
                <a href="/profile">Asad</a>
              </div>
        </header>

      </div>
    );
  }
}

export default Menu;
