import React from 'react';
import Logo from'./img/logo3.svg';
import {Link} from 'react-router-dom'
// ====================== FontAwesome Icons for Header Menu =============
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Media from "react-media";


  class LongMenu extends React.Component {
    constructor(props)
    {
      super (props);
      this.state = {
        anchorEl: null,
        firstName: 0,
          shown: false,
      };
    }




        toggle() {
        		this.setState({
        			shown: !this.state.shown
        		});
        	}

    componentDidMount() {
      fetch('/api/profileForMenu')
        .then(res => res.json())
        .then(firstName => this.setState({firstName: firstName[0].first_name}, () => console.log('profile fetched...', firstName[0].first_name)));
    }

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };


  render() {





            var shown = {
            			display: this.state.shown ? "block" : "none"
            		};

            		var hidden = {
            			display: this.state.shown ? "none" : "block"
            		}


    // const { anchorEl } = this.state;
    return (

        <header>
              <div className = "left-side">
                <Link to="/"><img src={Logo} alt="Eduvisors logo"/></Link>

              </div>

              <div className = "username">
                  <a href="" className="desktop">{this.state.firstName}</a>
                  <div className="mobile" id="user" >
                      <FontAwesomeIcon icon={faUser} />
                </div>
              </div>

              <div className = "right-side">
                <nav className="desktop">
                    <ul>
                        <li><a href="/HomePage/engine">Results</a></li>
                        <li><a href="/HomePage/about">About</a></li>
                        <li><a href="/HomePage/contactus">Contact Us</a></li>
                        <li><Link to="/HomePage/Results">Results</Link></li>
                        <li><Link to="/HomePage/Logout">Logout</Link></li>
                        <li><Link to="/HomePage/ListOfSchools">List of Schools</Link></li>

                    </ul>
                </nav>



                     <Media query="(max-width: 998px)">

                <div>


                <div className="mobile" id="bars" style={ shown }>


                      <ul>
                          <li><a href="/HomePage/engine">Results</a></li>
                          <li><a href="/HomePage/about">About</a></li>
                          <li><a href="/HomePage/contactus">Contact Us</a></li>
                          {/* <li><Link to="/HomePage/survey">Survey</Link></li>
                          <li><Link to="/Login">Login</Link></li> */}
                      </ul>

                </div>

                {/* <h2 style={ hidden }></h2> */}
                <FontAwesomeIcon icon={faBars} onClick={this.toggle.bind(this)} />


              </div>

              </Media>


              </div>

        </header>

    );
  }
}

export default LongMenu;
