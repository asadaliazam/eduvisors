import React, { Component } from 'react';
import '../styles/schoolProfile.css';

class SchoolProfile extends Component {
  constructor() {
    super();
    this.state = {
      schoolProfile: []
    };
  }

  componentDidMount() {
    fetch('/api/schoolProfile')
      .then(res => res.json())
      .then( => this.setState({schoolProfile}, () => console.log('schoolProfile fetched...', schoolProfile)));
  }

  render() {
    return (
      <div>
        <h2>schoolProfile</h2>
        <ul>
        {this.state.schoolProfile.map(customer =>
          <ul key={customer.id}><li>Name : {customer.first_name} {customer.last_name}</li><li>Email: {customer.email}</li><li>Field of Study: {customer.field_study}</li><li>Level of Education: {customer.lvl_educ}</li></ul>
        )}
        </ul>
      </div>
    );
  }
}

export default schoolProfile;
