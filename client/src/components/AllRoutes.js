import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LandingPage from './LandingPage';
import HomePage from './HomePage';



class AllRoutes extends Component {

  render() {
    return (

                <Switch>
                      <Route exact path="/" component={LandingPage} />
                      <Route path="/login" component={LoginForm} />
                      <Route exact path="/register" component={RegisterForm} />
                      <Route path="/HomePage" component={HomePage} />
                </Switch>
      
    );
  }
}

export default AllRoutes;
