import React from 'react';
import Logo from'./img/logo3.svg';
import {Link} from 'react-router-dom'
// ====================== FontAwesome Icons for Header Menu =============
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class LoginMenu extends React.Component {

  render() {
    return (
        <header>
              <div className = "left-side">
                  <Link to="/"><img src={Logo} alt="Eduvisors logo"/></Link>
              </div>
              <div className = "right-side">
                    <div className="mobile" id="exit">
                      <Link to="/"><FontAwesomeIcon icon={faTimes} /></Link>
                    </div>
              </div>
        </header>
    );
  }
}

export default LoginMenu;
