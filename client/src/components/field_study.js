import React, { Component } from 'react';


class FieldStudy extends Component {
  constructor() {
    super();
    this.state = {
      field_study: []
    };
  }

  componentDidMount() {
    fetch('/api/field_study')
      .then(res => res.json())
      .then(field_study => this.setState({field_study}, () => console.log('Fields of study fetched...', field_study)));
  }

  render() {
    return (
      <div>
        <h2>Field_study</h2>
        <ul>
        {this.state.field_study.map(field_study =>
          <li key={field_study.id}>{field_study.short} {field_study.full_name}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default FieldStudy;
