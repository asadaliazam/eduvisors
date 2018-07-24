import React, { Component } from 'react';
import Logo from'./img/logo3.svg';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      // <div className = "Menu">

        <header className="header">
              <div className = "left-side">
                  <img src={Logo} alt="Eduvisors logo"/>
                  {/* <p>| Eduvisors</p> */}
              </div>

              <div className = "username">
                  <a href="/profile" className="desktop">Asad</a>
                  <div className="mobile" id="user">
                      <FontAwesomeIcon icon={faUser} />
                </div>
              </div>

              <div className = "right-side">
                <nav className="desktop">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                        <li><Link to="/HomeContent">Home</Link></li>
                        <li><Link to="/survey">Survey</Link></li>
                    </ul>
                </nav>
                <div className="mobile" id="bars">
                      <FontAwesomeIcon icon={faBars} />
                </div>
              </div>

        </header>

      // </div>
    );
  }
}

export default Menu;
