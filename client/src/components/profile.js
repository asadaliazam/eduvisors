import React, { Component } from 'react';
import '../styles/profile.css';

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



            .then(res => res.json())
            .then(profile => this.setState({profile}, () => console.log('profile fetched...', profile)));

            let reqBody = {
                 email: "hello",
                 password: "hey"
               };

            fetch("/api/signup", {
                  method: "POST",
                  body: JSON.stringify(reqBody),
                  headers: {
                              "Content-Type": "application/json"
                            }
                })
                  .then((res) => {
                    if (res.ok){
                      return res.json();
                    } else {
                      throw new Error ('Something went wrong with your fetch');
                    }
                  }).then((json) => {
                    console.log(json);
                  })






  }

  render() {
    return (
      <div>
        <h2>profile</h2>
        <ul>
        {this.state.profile.map(customer =>
          <ul key={customer.id}><li>Name : {customer.first_name} {customer.last_name}</li><li>Email: {customer.email}</li><li>Field of Study: {customer.field_study}</li><li>Level of Education: {customer.lvl_educ}</li></ul>
        )}
        </ul>
      </div>
    );
  }
}

export default Profile;
