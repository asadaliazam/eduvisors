import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './AllRoutes';



class App extends Component {

  render() {
    return (

<Router>
        <AllRoutes />
</Router>
    );
  }
}

export default App;
