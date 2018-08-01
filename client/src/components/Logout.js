import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Logout extends Component {
  constructor() {
    super();
    this.callLogout = this.callLogout.bind(this);

    this.state = {
      done: 0,

    };
  }


callLogout()
{
  fetch('/api/logOut')
    .then(res => res.json())
    .then(done => this.setState({done}, () => console.log('profile fetched...', done)));
    // .catch(function() { this.setState({error: "Server Side failed to respond!"}), console.log(this.error); }); end of CATCH
}

  componentDidMount() {

  }
  render() {
    if (this.state.done === 1)
    {
      return <Redirect to='../' />
    }

    if (this.state.done === 0)
    {
      this.callLogout();
    }
    return (
      <div></div>

    );
  }
}

export default Logout;
