import React, { Component } from 'react';
import '../styles/profile.css';
import ProfileCompletion from './profileCompletion';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: []
    };
  }

  componentDidMount() {
    // https://www.youtube.com/watch?v=Oive66jrwBs
    fetch('/api/profile')
    .then(res => res.json())
    .then(prof => this.setState({profile: prof}, function (){
      console.log(99999, prof);
    }));
  }

  render() {
    console.log(111, this.state.profile[0]);
    let x = this.state.profile;
    console.log(222, x);

    return (
      <div>
          <ProfileCompletion />
          
      </div>
    ); // END of Return
  }
}

export default Profile;
