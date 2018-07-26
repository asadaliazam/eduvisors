import React, { Component } from 'react';
import ProfileCompletion from './profileCompletion';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: [],
      error: 0
    };
  }

  componentDidMount() {
    fetch('/api/profile')
      .then(res => res.json())
      .then(profile => this.setState({profile}, () => console.log('profile fetched...', profile)));
      // .catch(function() { this.setState({error: "Server Side failed to respond!"}), console.log(this.error); }); end of CATCH
  }

  render() {
    return (
      <div className="profile">
            {this.state.profile.map(user =>
                <div key={user.id}>
                <h2>{user.first_name} {user.last_name}</h2>

                <ProfileCompletion randomVariable={1}/>
                    <br />
                    <div className="user-info">
                    <ul>
                        <li>Email:</li>
                        <li> {user.email}</li>
                        <li>Field of Study:</li>
                        <li> {user.fs}</li>
                        <li>Level of Education: </li>
                        <li>{user.ledu}</li>
                    </ul>
                  </div>
               </div>
            )}
      </div>
    );
  }
}

export default Profile;
