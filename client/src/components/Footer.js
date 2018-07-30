import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faGooglePlusG, faInstagram} from '@fortawesome/fontawesome-free-brands';
// faTwitter, faLinkedin, faGithub, faFacebook,

class Footer extends Component {

  render() {
    return (
      <footer>
            <div className = "left-side">
                Eduvisors - Copyright &copy; 2018
            </div>

            <div className = "right-side">
                <ul>
                  <li> <a href="facebook"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                  <li> <a href="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li> <a href="gplus"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                </ul>
            </div>
      </footer>
    );
  }
}

export default Footer;
