import React, { Component } from 'react';
import ProfileCompletion from './profileCompletion';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: [],
      error: 0,

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
        <Card className="Profile">

          {/* <div  > */}
                {this.state.profile.map(user =>
                    <div key={user.id}>
                    <div className="name">{user.first_name} {user.last_name}</div>
                    <ProfileCompletion randomVariable={1}/>
                          <Card className="user-info">
                                    <Typography component="h2">
                                      <li>Email:</li>
                                      <li> {user.email}</li>
                                    </Typography>
                                    <Typography component="h2">
                                      <li>Field of Study:</li>
                                      <li> {user.fs}</li>
                                    </Typography>
                                    <Typography component="h2">
                                      <li>Level of Education: </li>
                                      <li>{user.ledu}</li>
                                    </Typography>
                          </Card>
                      </div>
                )}

              {/* </div> */}




        </Card>
    );
  }
}

export default Profile;
