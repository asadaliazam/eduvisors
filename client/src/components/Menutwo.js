import React from 'react';
import Logo from'./img/logo1.svg';
import {Link} from 'react-router-dom'
// ====================== FontAwesome Icons for Header Menu =============
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'


  class LongMenu extends React.Component {
    constructor(props)
    {
      super (props);
      this.state = {
        anchorEl: null,
      };
    }

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };


  render() {
    // const { anchorEl } = this.state;
    return (

        <header>
              <div className = "left-side">
                <Link to="/HomePage"><img src={Logo} alt="Eduvisors logo"/></Link>

              </div>



              <div className = "right-side">
                <nav className="desktop">
                    <ul>
                        <li><a href="/HomePage/about">About</a></li>
                        <li><a href="/HomePage/contactus">Contact Us</a></li>
                        <li><Link to="/Login">Login</Link></li>
                        {/* <li><Link to="/register">Signup</Link></li> */}
                    </ul>
                </nav>
                <div className="mobile" id="bars">
                      <FontAwesomeIcon icon={faBars} />
                </div>
              </div>

        </header>

    );
  }
}

export default LongMenu;
