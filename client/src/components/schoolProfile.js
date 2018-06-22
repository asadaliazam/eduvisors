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
      .then(schoolProfile => this.setState({schoolProfile}, () => console.log('schoolProfile fetched...', schoolProfile)));
  }

  render() {
    return (
      <div>
        <h2>schoolProfile</h2>
        <div>

          <img src="https://picsum.photos/200/300
"/>
        </div>
        <ul>
        {this.state.schoolProfile.map(customer =>
          <ul key={customer.id}><li>Name : {customer.id} {customer.ca_ranking}</li><li>Email: {customer.wd_rank}</li><li>Field of Study: {customer.institute_name}</li><li>Level of Education: {customer.url}</li><li>Level of Education: {customer.province}</li><li>Level of Education: {customer.two_letter}</li></ul>
        )}
        </ul>
      </div>
    );
  }
}

export default SchoolProfile;
