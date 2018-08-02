import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LandingPage from './LandingPage';
import ExtContactUs from './ExtContactUs';
import ExtAbout from './ExtAbout';
import HomePage from './HomePage';
// import ResponsiveDrawer from './HomePage2'

class AllRoutes extends Component {

  render() {
    return (
                <Switch>
                      <Route exact path="/" component={LandingPage} />
                      <Route path="/login" component={LoginForm} />
                      <Route exact path="/register" component={RegisterForm} />
                      <Route path="/HomePage" component={HomePage} />
                      <Route path="/contacts" component={ExtContactUs} />
                      <Route path="/abouts" component={ExtAbout} />

                </Switch>
    );
  }
}

export default AllRoutes;
