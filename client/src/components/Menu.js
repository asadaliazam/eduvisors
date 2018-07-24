import React, { Component } from 'react';
import Logo from'./img/logo3.svg';
import {Link} from 'react-router-dom'
// ======================Humberger menu for header=============
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// ======================Humberger menu for header=============
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];
const ITEM_HEIGHT = 48;
// ===============================================================
// class Menu extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

  class LongMenu extends React.Component {
    state = {
      anchorEl: null,
    };

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };


  render() {
    const { anchorEl } = this.state;
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


{/* ============================Header Menu============================ */}


<div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {/* <MoreVertIcon /> */}
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
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

// export default Menu;
export default LongMenu;
