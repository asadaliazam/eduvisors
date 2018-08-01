import React from 'react';
import Logo from'./img/logo3.svg';
import {Link} from 'react-router-dom'
// ====================== FontAwesome Icons for Header Menu =============
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
import Media from "react-media";


  class LongMenu extends React.Component {
    constructor(props)
    {
      super (props);
      this.state = {
        anchorEl: null,
          shown: false,
      };
    }




            toggle() {
            		this.setState({
            			shown: !this.state.shown
            		});
            	}


    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };


  render() {
    // const { anchorEl } = this.state;




                var shown = {
                			display: this.state.shown ? "block" : "none"
                		};

                		var hidden = {
                			display: this.state.shown ? "none" : "block"
                		}

    return (

        <header>
              <div className = "left-side">
                <Link to="/HomePage"><img src={Logo} alt="Eduvisors logo"/></Link>

              </div>



              <div className = "right-side">
                <nav className="desktop">
                    <ul>
                        <li><a href="/abouts">About</a></li>
                        <li><a href="/contacts">Contact Us</a></li>
                        <li><Link to="/Login">Login</Link></li>
                        {/* <li><Link to="/register">Signup</Link></li> */}
                    </ul>
                </nav>
                <Media query="(max-width: 998px)">
                  <div>
           <div className="mobile" id="bars" style={ shown }>


                 <ul>
                     <li><a href="/HomePage/about">About</a></li>
                     <li><a href="/HomePage/contactus">Contact Us</a></li>
                     <li><Link to="/Login">Login</Link></li>
                  
                 </ul>


             <h2> xksjadhxjhsbx </h2>

           </div>

           <FontAwesomeIcon icon={faBars} onClick={this.toggle.bind(this)} />

                  </div>

              </Media>

              </div>

        </header>

    );
  }
}

export default LongMenu;
