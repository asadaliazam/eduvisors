import React from 'react';
import Logo from'./img/logo3.svg';
import {Link} from 'react-router-dom'
// ====================== FontAwesome Icons for Header Menu =============
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class LoginMenu extends React.Component {

  render() {
    return (

        <header>
              <div className = "left-side">
                <Link to="/HomePage"><img src={Logo} alt="Eduvisors logo"/></Link>

              </div>

              <div className = "right-side">
                {/* <nav className="desktop">
                    <ul>
                        <li><a href="/HomePage/about">About</a></li>
                        <li><a href="/HomePage/contactus">Contact Us</a></li>
                    </ul>
                </nav> */}
                <div className="mobile" id="exit">
                  <Link to="/"><FontAwesomeIcon icon={faTimes} /></Link>
                </div>

              </div>

        </header>

    );
  }
}

export default LoginMenu;
