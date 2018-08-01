import React, { Component } from 'react';
import Menu from './Menu.js';
import Profile from './profile.js';
import Footer from './Footer.js';
import HomeSwitch from './HomeSwitch.js';
import Media from "react-media";

class HomePage extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);

    this.state = {
        shown: true,
    };
  }

 toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

  render() {
    var shown = { display: this.state.shown ? "block" : "none" };
		var hidden = { display: this.state.shown ? "none" : "block" };
    return (
      <div className="HomePage">
              <Menu toggle={this.toggle}/>
              <div className={"Main"+(this.state.showProfile ? '' : ' hideProfile')}>
                    <div>
                      <Media query="(min-width: 999px)">

                          <div style={ shown }>
                          <Profile />
                          </div>
                        </Media>

                          <Media query="(max-width: 998px)">
                            <div style={hidden}>
                              <Profile />
                            </div>

                          </Media>
                    </div>
                    <HomeSwitch match={this.props.match}/>
              </div>
              <Footer />
      </div>
    );
  }
}

export default HomePage;
