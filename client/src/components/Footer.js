import React, { Component } from 'react';
// import '../styles/everything.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className = "footer">
            <div className = "left-side">
                  <ul>
                    <li> <a href="/">Home</a></li>
                    <li> <a href="./about">About</a></li>
                    <li> <a href="./contactus">Contact Us</a></li>
                  </ul>
            </div>

            <div className = "right-side">
                <ul>
                  <li> <a href="facebook">Facebook</a></li>
                  <li> <a href="instagram">Instagram</a></li>
                  <li> <a href="gplus">G+</a></li>
                </ul>
            </div>
      </div>
    );
  }
}

export default Footer;
