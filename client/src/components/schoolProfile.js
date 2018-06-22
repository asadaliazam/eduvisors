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
          <ul key={customer.id}><li>id : {customer.id}</li><li> Canadian Ranking: {customer.ca_ranking}</li><li>World Ranking: {customer.wd_rank}</li><li>Institute Name: {customer.institution_name}</li><li>Url: {customer.url}</li><li>Province: {customer.province}</li><li>Short: {customer.two_letter}</li></ul>
        )}
        </ul>
      </div>
    );
  }
}

export default SchoolProfile;
