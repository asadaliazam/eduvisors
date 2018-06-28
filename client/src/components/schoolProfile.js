import React, { Component } from 'react';
import '../styles/schoolProfile.css';

class SchoolProfile extends Component {
  constructor(props) {
    super(props);
    console.log(props.match);
    this.state = {
      schoolProfile: [],
      schoolName : "University of Toronto",
      school: props.match.params.institutionName
    };
  }
  componentWillReceiveProps(nextProps)
  {
    this.state.school = nextProps.match.params.institutionName;
    console.log(this.state.schoolName);
  }
  componentDidMount() {

            let reqBody = {
            schoolName: this.state.schoolName
          };

          console.log(this.state.school);

          fetch("/api/schoolProfile", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                      "Content-Type": "application/json"
                  }
          }).then((res) => {
              if (res.ok){
                return res.json();
              } else {
                throw new Error ('Something went wrong with your fetch');
              }
            }).then((json) => {
              console.log(json);
            })



            setTimeout(function() {

              fetch('/api/signup')
                .then(res => res.json())
                .then(schoolProfile => this.setState({schoolProfile}, () => console.log('schoolProfile fetched...', schoolProfile)));





               //Start the timer
                  this.setState({render: true}) //After 1 second, set render to true
              }.bind(this), 1000)




  }

  render() {
    return (

<div>


    <h2>schoolProfile</h2>
    <div>

      <img src="https://picsum.photos/200/300"/>
    </div>
    <ul>
    {this.state.schoolProfile.map(customer =>
      <ul key={customer.id}><li>id : {customer.id}</li><li> Canadian Ranking: {customer.ca_ranking}</li><li>World Ranking: {customer.wd_rank}</li><li>Institute Name: {customer.institution_name}</li><li>Url: {customer.url}</li><li>Province: {customer.province}</li><li>Short: {customer.two_letter}</li></ul>
    )}
    </ul>
    <p> {this.state.school} </p>


</div>

    );
  }
}

export default SchoolProfile;
