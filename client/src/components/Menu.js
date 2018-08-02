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

            var shown = { display: this.state.shown ? "block" : "none" };

    // const { anchorEl } = this.state;
    return (

        <header>
              <div className = "left-side">
                <Link to="/"><img src={Logo} alt="Eduvisors logo"/></Link>

              </div>

              <div className = "username">
                  <div className="mobile" id="user" >
                      <FontAwesomeIcon icon={faUser} onClick={this.props.toggle}/>
                </div>
              </div>

              <div className = "right-side">
                <nav className="desktop">
                    <ul>
                        <li><a href="/HomePage/">Home</a></li>
                        <li className="surveyLink"><a href="/HomePage/survey">Take Survey</a></li>
                        <li><a href="/HomePage/Results">Results</a></li>
                        <li><a href="/HomePage/ListOfSchools">List of Schools</a></li>
                        <li><a href="/HomePage/about">About</a></li>
                        <li><a href="/HomePage/contactus">Contact Us</a></li>
                        <li><a href="/HomePage/Logout">Logout</a></li>

                    </ul>
                </nav>

                     <Media query="(max-width: 998px)">
                            <div>
                                  <div className="mobile" id="bars" style={ shown }>
                                        <ul>
                                          <li><a href="/HomePage/">Home</a></li>
                                          <li><a href="/HomePage/survey">Take Survey</a></li>
                                          <li><a href="/HomePage/Results">Results</a></li>
                                          <li><a href="/HomePage/ListOfSchools">List of Schools</a></li>
                                          <li><a href="/HomePage/about">About</a></li>
                                          <li><a href="/HomePage/contactus">Contact Us</a></li>
                                          <li><a href="/HomePage/Logout">Logout</a></li>
                                        </ul>

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
