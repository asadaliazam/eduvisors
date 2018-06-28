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
    .then(prof => this.setState({profile: prof[0]}, function (){
      console.log(99999, prof);
    }));
      // .then(function(res){
      //   return res.json();
      // })
      // .then(function(data){
      //   console.log(555, data[0])
      //   //console.log(666, this.state.profile[0]);
      //   //return this.setState({ profile: data[0] });
      // })
      // .catch((err) => console.log(777, err));
  }

  render() {
    console.log(111, this.state.profile[0]);
    let x = this.state.profile;
    console.log(222, x);

    return (
      <div>
          <ProfileCompletion />
          {this.state.profile[0]}


      </div>
    ); // END of Return
  }
}

export default Profile;
