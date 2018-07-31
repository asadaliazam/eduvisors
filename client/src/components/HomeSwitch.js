import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import HomeContent from './HomeContent';
import Engine from './engine';
import SchoolProf from './schoolProf';
import Survey1 from './survey1';
import Survey2 from './survey2';
import Survey3 from './survey3';
import Survey4 from './survey4';
import AboutPage from './AboutPage.js';
import ContactUs from './ContactUs.js';





class HomeSwitch extends Component {

  render() {
    console.log(this.props.match)
    return (

                <Switch>
                      <Route exact path="/HomePage" component={HomeContent} />
                      <Route path={`${this.props.match.path}/engine`} component={Engine} />
                      <Route path={`${this.props.match.path}/survey`} component={Survey1} />
                      <Route path={`${this.props.match.path}/about`} component={AboutPage} />
                        <Route path={`${this.props.match.path}/contactus`} component={ContactUs} />
                      <Route path={`${this.props.match.path}/schoolProf/:schoolID`} component={SchoolProf} />
                      <Route path={`${this.props.match.path}/survey1`} component={Survey1} />
                      <Route path={`${this.props.match.path}/survey2`} component={Survey2} />
                      <Route path={`${this.props.match.path}/survey3`} component={Survey3} />
                      <Route path={`${this.props.match.path}/survey4`} component={Survey4} />
                </Switch>

    );
  }
}

export default HomeSwitch;
