import React, { Component } from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router} from 'react-router-dom'

class App extends Component {

  render() {
    return (

<Router>
        <HomePage />
</Router>
    );
  }
}

export default App;
