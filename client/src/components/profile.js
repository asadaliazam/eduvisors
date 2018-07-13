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
    fetch('/api/profile')
      .then(res => res.json())
      .then(profile => this.setState({profile}, () => console.log('profile fetched...', profile)));
  }

  render() {
    return (
      <div>
        {this.state.profile.map(user =>
        <div key={user.id}>
            <ProfileCompletion />
            <h1>{user.first_name} {user.last_name}</h1>
            <br />
            <ul>
                <li>Email: {user.email}</li>
                <li>Field of Study: {user.field_study}</li>
                <li>Level of Education: {user.lvl_educ}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
